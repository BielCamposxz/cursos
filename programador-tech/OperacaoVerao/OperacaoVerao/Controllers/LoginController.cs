using Microsoft.AspNetCore.Mvc;
using OperacaoVerao.Data;
using OperacaoVerao.helper;
using OperacaoVerao.Models;
using OperacaoVerao.Repositorios;

namespace OperacaoVerao.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly ISessaoDoUsuario _sessaoDoUsuario;

        public LoginController(IUsuarioRepositorio usuarioRepositorio, ISessaoDoUsuario sessaoDoUsuario)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _sessaoDoUsuario = sessaoDoUsuario;
        }

        public IActionResult Index()
        {
            if (_sessaoDoUsuario.BuscarSessaoDoUsuario() != null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost]
        public IActionResult Entrar(LoginModel loginModel)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    UsuarioModel usuario = _usuarioRepositorio.BuscarPorLogin(loginModel.Login);



                    if (usuario != null)
                    {
                        if (usuario.SenhaValida(loginModel.Senha))
                        {
                            _sessaoDoUsuario.CriarSessaoDoUsuario(usuario);
                            return RedirectToAction("Index", "Home");
                        }

                        TempData["MensagemErro"] = "senha invalida";

                    }

                    TempData["MensagemErro"] = "usuario e/ou senha invalidos(s)";

                }

                return View("Index");
            }
            catch (Exception)
            {
                TempData["MensagemErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index");
            }

        }

        public IActionResult Sair()
        {
            _sessaoDoUsuario.RemoverSessaoDoUsuario();
            return RedirectToAction("Index", "Login");
        }

    }
}

