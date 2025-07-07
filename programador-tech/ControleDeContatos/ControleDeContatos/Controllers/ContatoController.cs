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
            try
            {
                if (ModelState.IsValid)
                {
                    _contatoRepositorio.Alterar(contato);
                    TempData["MensagemSucesso"] = "Contato Editado com sucesso";
                    return RedirectToAction("Index");

                }

                // fala que vai cair na view de Editar
                return View("Editar", contato);
            }
            catch (Exception)
            {
                TempData["MensagemErro"] = "Ops, nao conseguimos Editar seu contato tente novamente";
                return View("Editar", contato);
            }
        }

        public IActionResult ApagarConfirmacao(int id)
        {
            ContatoModel contatoId = _contatoRepositorio.ListarPorId(id);
            return View(contatoId);
        }

        public IActionResult Apagar(int id)
        {
            try
            {

                bool apagado = _contatoRepositorio.Apagar(id);

                if(apagado)
                {
                    TempData["MensagemSucesso"] = "Contato apagado com sucesso";

                }
                else
                {
                    TempData["MensagemErro"] = "Ops, nao conseguimos apagar seu contato tente novamente";
                }

                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                TempData["MensagemErro"] = "Ops, nao conseguimos apagar seu contato tente novamente";
                return RedirectToAction("Index");

            }
        }

        // fala que e um metodo post
        //metodo para enviar os valores no banco
        [HttpPost]
        public IActionResult Criar(ContatoModel contato)
        {

            try
            {
                // verifica os dataAnotation da a model e valida
                if (ModelState.IsValid)
                {
                    _contatoRepositorio.Adicionar(contato);
                    //  criar uma variavel temporaria com o nome de "MensagemSucesso"
                    TempData["MensagemSucesso"] = "Contato cadrastrado com sucesso";
                    return RedirectToAction("Index");
                }

                return View(contato);
            }
            catch (Exception)
            {
                    TempData["MensagemErro"] = "Ops, nao conseguimos cadrastrar seu contato tente novamente";
                    return RedirectToAction("Index");
            }

        }

    }
}
