using EstoqueDePeças.Data;
using EstoqueDePeças.Models;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueDePeças.Controllers
{
    public class EstoqueController : Controller
    {
        private readonly BancoContext _bancoContext;

        public EstoqueController(BancoContext bancoContext  )
        {
            _bancoContext = bancoContext;
        }
        public IActionResult Index()
        {
            List<EstoqueModel> estoque = _bancoContext.Estoque.ToList();
            return View(estoque);
        }

        public IActionResult Editar()
        {
            return View();
        }

        public IActionResult Apagar()
        {
            return View();
        }

        public IActionResult Adicionar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Adicionar(EstoqueModel estoque)
        {
            _bancoContext.Estoque.Add(estoque);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
