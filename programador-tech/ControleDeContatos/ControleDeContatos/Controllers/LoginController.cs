using ControleDeContatos.helper;
using ControleDeContatos.Models;
using ControleDeContatos.repositorio;
using Microsoft.AspNetCore.Mvc;

namespace ControleDeContatos.Controllers
{
    public class LoginController : Controller
    {

        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly ISessao _sessao;
        public LoginController(IUsuarioRepositorio usuarioRepositorio, ISessao sessao)
        {
            _sessao = sessao;
            _usuarioRepositorio = usuarioRepositorio;
        }

        public IActionResult Sair()
        {
            _sessao.RemoverSessaoDoUsuario();
            return RedirectToAction("Index", "Login");
        }

        public IActionResult Index(UsuarioModel usuario)
        {
            // se o usuario estiver logado, redirecionar para a home
            if(_sessao.BuscarSessaoDoUsuario() != null)
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

                    

                    if(usuario != null)
                    {
                        if(usuario.SenhaValida(loginModel.Senha))
                        {
                            _sessao.CriarSessaoDoUsuario(usuario);
                            return RedirectToAction("Index","Home");
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
    }
}
