using EstoqueDePecas.Models;
using EstoqueDePecas.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueDePecas.Controllers
{
    public class EstoqueController : Controller
    {
        private readonly IEstoqueRepositorio _repositorio;

        public EstoqueController(IEstoqueRepositorio repositorio)
        {
             _repositorio = repositorio;   
        }

        public IActionResult Index()
        {
            List<PecasModel> pecas = _repositorio.BuscarTodos();
            return View(pecas);
        }

        public IActionResult Adicionar()
        {
            return View(); 
        }

        public IActionResult ApagarConfirmacao()
        {
            return View();
        }
        public IActionResult Editar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Adicionar(PecasModel pecas)
        {
            _repositorio.AdicionarPeca(pecas);
            return RedirectToAction("Index");
        }
    }
}
