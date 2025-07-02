using EstoqueDePeças.Data;
using EstoqueDePeças.Models;
using Microsoft.AspNetCore.Mvc;

namespace EstoqueDePeças.Controllers
{
    public class FuncionarioController : Controller

    {
        public readonly BancoContext _bancoContext;

        public FuncionarioController(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
            
        }

        public FuncionarioModel ListarPorId(int id)
        {
            return _bancoContext.Funcionario.FirstOrDefault(funcionario => funcionario.id == id);
        }

        public IActionResult Index()
        {
            List<FuncionarioModel> funcionario = _bancoContext.Funcionario.ToList();
            return View(funcionario);
        }
        public IActionResult Editar(int id)
        {
            FuncionarioModel funcionario = ListarPorId(id);
            return View(funcionario);
        }

        public IActionResult Apagar(int id)
        {
            FuncionarioModel funcionario = ListarPorId(id);
            return View(funcionario);
        }


        public IActionResult ApagarDoBanco(int id)
        {
            FuncionarioModel funcionario = ListarPorId(id);
            if (funcionario == null) throw new Exception("ouve um erro na delecao do contato");
            _bancoContext.Funcionario.Remove(funcionario);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Adicionar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Adicionar(FuncionarioModel funcionario)
        {
            _bancoContext.Funcionario.Add(funcionario);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Alterar(int id, FuncionarioModel estoque)
        {
            FuncionarioModel estoqueDB = ListarPorId(id);

            estoqueDB.Nome = estoque.Nome;
            estoqueDB.Cargo = estoque.Cargo;
            estoqueDB.salario = estoque.salario;
            _bancoContext.Funcionario.Update(estoqueDB);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");

        }

       
    }
}
