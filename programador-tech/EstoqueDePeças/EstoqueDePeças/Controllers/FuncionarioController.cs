using EstoqueDePeças.Data;
using EstoqueDePeças.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

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
            try
            {
                FuncionarioModel funcionario = ListarPorId(id);
                if (funcionario == null) throw new Exception("ouve um erro na delecao do contato");
                var apagado = _bancoContext.Funcionario.Remove(funcionario);
                _bancoContext.SaveChanges();

                if (apagado != null)
                {
                    TempData["MessageSucesso"] = "Funcionario apagado com sucesso";
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

        public IActionResult Adicionar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Adicionar(FuncionarioModel funcionario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _bancoContext.Funcionario.Add(funcionario);
                    _bancoContext.SaveChanges();
                    TempData["MessageSucesso"] = "Funcionario adicionado com sucesso";
                    return RedirectToAction("Index");

                }
                return View(funcionario);
            }
            catch (Exception)
            {
                    TempData["MessageErro"] = "Ops, algo decu errado";
                    return RedirectToAction("Index");

            }
        }

        [HttpPost]
        public IActionResult Alterar(int id, FuncionarioModel estoque)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    FuncionarioModel estoqueDB = ListarPorId(id);

                    estoqueDB.Nome = estoque.Nome;
                    estoqueDB.Cargo = estoque.Cargo;
                    estoqueDB.salario = estoque.salario;
                    _bancoContext.Funcionario.Update(estoqueDB);
                    _bancoContext.SaveChanges();
                    TempData["MessageSucesso"] = "Funcionario editado com sucesso";
                    return RedirectToAction("Index");
                }
                return View("Editar", estoque);
            }
            catch (Exception)
            {
                TempData["MessageErro"] = "Ops, algo deu errado";
                return RedirectToAction("Index");
            }
        }

       
    }
}
