using Microsoft.AspNetCore.Mvc;
using OperacaoVerao.Models;
using OperacaoVerao.Repositorios;

namespace OperacaoVerao.Controllers
{
    public class GabrielController : Controller
    {
        private readonly IGabriel _gabriel;

        public GabrielController(IGabriel gabriel)
        {
            _gabriel = gabriel;
        }

       public IActionResult Index()
       {
            List<GabrielModel> gabriel = _gabriel.BuscarTodos();
            return View(gabriel);
       }
       public IActionResult marcar(string dia, int id)
       {
            GabrielModel gabriel = _gabriel.BuscarDia(dia, id);
            return View(gabriel);
       }

   


        public IActionResult EditarDia(GabrielModel gabriel)
        {
            _gabriel.EditarDia(gabriel);
            return RedirectToAction("Index");
        }
            
    }
}
