using ControleDeContatos.Models;
using ControleDeContatos.repositorio;
using Microsoft.AspNetCore.Mvc;

namespace ControleDeContatos.Controllers
{
    public class ContatoController : Controller
    {

        private readonly IContatoRepositorio _contatoRepositorio;

        public ContatoController(IContatoRepositorio contatoRepositorio)
        {
            _contatoRepositorio = contatoRepositorio;
        }

        public IActionResult Index()
        {
            List<ContatoModel> contatos = _contatoRepositorio.BuscarTodos();
            return View(contatos);
        }

        public IActionResult Criar()
        {
            return View();
        }

        public IActionResult Editar(int id)
        {
            // pegando a pessoa no banco e colocando no input
            ContatoModel contatoId = _contatoRepositorio.ListarPorId(id);
            return View(contatoId);
        }

        [HttpPost]
        public IActionResult Alterar(ContatoModel contato)
        {
            _contatoRepositorio.Alterar(contato);
            return RedirectToAction("Index");
        }

        public IActionResult ApagarConfirmacao(int id)
        {
            ContatoModel contatoId = _contatoRepositorio.ListarPorId(id);
            return View(contatoId);
        }

        public IActionResult Apagar(int id)
        {
            _contatoRepositorio.Apagar(id);


            return RedirectToAction("Index");
        }

        // fala que e um metodo post
        //metodo para enviar os valores no banco
        [HttpPost]
        public IActionResult Criar(ContatoModel contato)
        {
            
            _contatoRepositorio.Adicionar(contato);
            return RedirectToAction("Index");
        }

    }
}
