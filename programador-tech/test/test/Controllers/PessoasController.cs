using Microsoft.AspNetCore.Mvc;
using test.Data;
using test.Models;

namespace test.Controllers
{
    public class PessoasController : Controller
    {

        private readonly BancoContext _bancoContext;

        public PessoasController(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        public List<PessoasModel> BuscarDados()
        {
            List<PessoasModel> pessoas = _bancoContext.Pessoas.ToList();
            return pessoas;
        }

        public IActionResult Index()
        {
            List<PessoasModel> pessoas = BuscarDados();
            return View(pessoas);
        }

        public IActionResult Criar()
        {
            return View();
        }

        public IActionResult Editar(int id)
        {
            PessoasModel pessoas = ListarPorId(id);
            return View(pessoas);
        }

        public PessoasModel ListarPorId(int id)
        {
            return _bancoContext.Pessoas.FirstOrDefault(pessoas => pessoas.Id == id);
        }

        public IActionResult Apagar(int id)
        {
            PessoasModel pessoa = ListarPorId(id);
            return View(pessoa);
        }

        public IActionResult Remover(int id)
        {
            PessoasModel pessoas = ListarPorId(id);
            _bancoContext.Pessoas.Remove(pessoas);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");
        }


        [HttpPost]
        public IActionResult Editar(int id, PessoasModel pessoas)
        {
            PessoasModel pessoasDb = ListarPorId(id);

            pessoasDb.Nome = pessoas.Nome;
            pessoasDb.Sobrenome = pessoas.Sobrenome;
            pessoasDb.Email = pessoas.Email;

            _bancoContext.Pessoas.Update(pessoasDb);
            _bancoContext.SaveChanges();


            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Adicionar(PessoasModel pessoas)
        {
            _bancoContext.Pessoas.Add(pessoas);
            _bancoContext.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
