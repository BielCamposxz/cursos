using OperacaoVerao.Models;
using OperacaoVerao.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace OperacaoVerao.Controllers
{
    public class UsuarioController : Controller
    {

        private readonly IUsuarioRepositorio _usuarioRepositorio;

        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        public IActionResult ApagarConfirmacao(int id)
        {
            UsuarioModel usuario = _usuarioRepositorio.ListarPorId(id);
            return View(usuario);
        }

        [HttpPost]  
        public IActionResult Criar(UsuarioModel usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _usuarioRepositorio.Adicionar(usuario);
                    TempData["MensagemSucesso"] = "Usuario criado com sucesso";
                    return RedirectToAction("Index");
                }
                return View(usuario);
            }
            catch (Exception)
            {
                TempData["MensagemErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index")
                    ;
            }
        }
        public IActionResult Criar()
        {
            return View();
        }
        public IActionResult Index()
        {
            List<UsuarioModel> usuario = _usuarioRepositorio.BuscarTodos();
            return View(usuario);
        }

        public IActionResult Editar(int id)
        {
            UsuarioModel usuario = _usuarioRepositorio.ListarPorId(id);
            return View(usuario);
        }


        public IActionResult Apagar(int id)
        {
            try
            {
                bool Apagado = _usuarioRepositorio.Apagar(id);

                if (Apagado)
                {
                    TempData["MensagemSucesso"] = "Usuario apagado com sucesso";
                    return RedirectToAction("Index");
                }
                else
                {
                    TempData["MensagemErro"] = "ops, algo deu errado";
                    return RedirectToAction("Index");
                }
            }
            catch (Exception)
            {
                TempData["MensagemErro"] = "ops, algo deu errado";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public IActionResult Alterar(UsuarioSemSenhaModel usuarioSemSenha)
        {
            try
            {
                UsuarioModel usuario = null;
                if (ModelState.IsValid)
                {
                    usuario = new UsuarioModel()
                    {
                        Id = usuarioSemSenha.Id,
                        Nome = usuarioSemSenha.Nome,
                        Login = usuarioSemSenha.Login,
                        Email = usuarioSemSenha.Email,
                        Perfil = (enums.PerfilEnum)usuarioSemSenha.Perfil
                    };
                   usuario =  _usuarioRepositorio.Alterar(usuario);
                    TempData["MensagemSucesso"] = "Usuario editado com sucesso";
                    return RedirectToAction("Index");
                }
                TempData["MensagemErro"] = "ops, algo deu errado";
                return View("Editar", usuario);
            }
            catch
            {
                TempData["MensagemErro"] = "ops, algo deu errado";
                return RedirectToAction("Index");
            }
        }
    }
}
