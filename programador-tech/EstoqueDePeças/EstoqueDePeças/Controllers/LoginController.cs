using EstoqueDePeças.Data;
using EstoqueDePeças.helper;
using EstoqueDePeças.Models;
using Microsoft.AspNetCore.Mvc;


namespace EstoqueDePeças.Controllers
{
    public class LoginController : Controller
    {

        private readonly BancoContext _bancoContext;
        private readonly ISessao _sessao;

        public LoginController(BancoContext bancoContext, ISessao sessao)
        {
            _sessao = sessao;
            _bancoContext = bancoContext;
        }

        public IActionResult Index()
        {
            if(_sessao.BuscarSessaoDoUsuario() != null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        public IActionResult Sair()
        {
            _sessao.RemoverSessaoDoUsuario();
            return RedirectToAction("Index", "Login");
        }

        public UsuarioModel BuscarPorLogin(string login)
        {
           return _bancoContext.Usuarios.FirstOrDefault(usuario => usuario.Login.ToUpper() == login.ToUpper());
        }

        [HttpPost]
        public IActionResult Entrar(LoginModel loginModel)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    UsuarioModel usuario = BuscarPorLogin(loginModel.Login);
                    if (usuario != null)
                    {
                        if (usuario.SenhaValida(loginModel.Senha))
                        {
                            _sessao.CriarSessaoDoUsuario(usuario);
                            return RedirectToAction("Index", "Home");
                        }
                    }
                    TempData["MensagemErro"] = "senha ou usuario invalido(s)";
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
