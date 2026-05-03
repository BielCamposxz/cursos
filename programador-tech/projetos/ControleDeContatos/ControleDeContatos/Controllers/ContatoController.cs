using ControleDeContatos.Models;
using ControleDeContatos.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace ControleDeContatos.Controllers
{
    public class ContatoController : Controller
    {
        private readonly IContatoRepositorio _repositorio;

        public ContatoController(IContatoRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        public IActionResult Index()
        {
            List<ContatoModel> contatos = _repositorio.BuscarTodos();
            return View(contatos);
        }
        
        public IActionResult Criar() => View();

        public IActionResult Editar()
        {
            return View();
        }

        public IActionResult Apagarconfirmacao()
        {
            return  View();
        }

        [HttpPost]
        public IActionResult Criar(ContatoModel contato)
        {
            _repositorio.Adicionar(contato);
            return RedirectToAction("Index");
        }
       
    }
}
