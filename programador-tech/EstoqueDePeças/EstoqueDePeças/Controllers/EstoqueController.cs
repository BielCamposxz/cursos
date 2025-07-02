using EstoqueDePeças.Data;
using EstoqueDePeças.Migrations;
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

        public IActionResult Editar(int id)
        {
            EstoqueModel estoque = ListarPorId(id);
            return View(estoque);
        }

        [HttpPost]
        public IActionResult Alterar(int id, EstoqueModel estoque)
        {
            EstoqueModel estoqueDB = ListarPorId(id);

            estoqueDB.Produto = estoque.Produto;
            estoqueDB.EmEstoque = estoque.EmEstoque;
            estoqueDB.Preco = estoque.Preco;

            _bancoContext.Estoque.Update(estoqueDB);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");

        }

        public EstoqueModel ListarPorId(int id)
        {
            return _bancoContext.Estoque.FirstOrDefault(estoque => estoque.id == id);
        }

        public IActionResult Apagar(int id)
        {
            EstoqueModel estoque = ListarPorId(id);
            return View(estoque);
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

        public IActionResult ApagarDoBanco(int id)
        {
            EstoqueModel estoque = ListarPorId(id);
            _bancoContext.Estoque.Remove(estoque);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");

        }

    }
}
