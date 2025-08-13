using EstoqueDePeças.Models;
using EstoqueDePeças.Data;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueDePeças.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly BancoContext _bancoContext;

        public UsuarioController(BancoContext bancoContext)
        {
               _bancoContext = bancoContext;
        }


        public IActionResult Index()
        {
            List<UsuarioModel> usuarios = BuscarTodos();
            return View(usuarios);
        }

        public IActionResult Criar()
        {
            return View();
        }

        public IActionResult Editar(int id)
        {
            UsuarioModel usuario = BuscarPorId(id);
            return View(usuario);
        }

        public IActionResult ApagarConfirmacao(int id)
        {
            UsuarioModel usuario = BuscarPorId(id);
            return View(usuario);
        }

        public List<UsuarioModel> BuscarTodos()
        {
            return _bancoContext.Usuarios.ToList();
        }

        public UsuarioModel BuscarPorId(int id)
        {
            return _bancoContext.Usuarios.FirstOrDefault(usuario => usuario.Id == id);
        }

        [HttpPost]
        public IActionResult Criar(UsuarioModel usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    usuario.DataDeCadrastro = DateTime.Now;
                    _bancoContext.Usuarios.Add(usuario);
                    _bancoContext.SaveChanges();
                    TempData["MensagemSucesso"] = "Usuario criado com sucesso";
                    return RedirectToAction("Index");
                }
                return View(usuario);
            }
            catch (Exception)
            {
                TempData["MessageErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index");
            }
        }

        public IActionResult Apagar(int id)
        {
            try
            {
                UsuarioModel usuario = BuscarPorId(id);
                var removido = _bancoContext.Usuarios.Remove(usuario);
                _bancoContext.SaveChanges();

                if (removido != null)
                {
                    TempData["MensagemSucesso"] = "Usuario apagado com sucesso";
                }
                else
                {
                    TempData["MessageErro"] = "Ops, algo deu errado";

                }

                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                TempData["MessageErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public IActionResult Alterar(int id, UsuarioSemSenhaModel usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UsuarioModel usuarioDB = BuscarPorId(id);

                    usuarioDB.DataDeAtualizacao = DateTime.Now;
                    usuarioDB.Nome = usuario.Nome;
                    usuarioDB.Login = usuario.Login;
                    usuarioDB.Email = usuario.Email;
                    usuarioDB.Perfil = usuario.Perfil;
                    _bancoContext.Usuarios.Update(usuarioDB);
                    _bancoContext.SaveChanges();
                    TempData["MensagemSucesso"] = "Usuario editado com sucesso";
                    return RedirectToAction("Index");

                }
                    return View("Editar", usuario);
            }
            catch (Exception)
            {
                TempData["MessageErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index");


            }
        }
    }
}
    