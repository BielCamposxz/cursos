using Microsoft.AspNetCore.Mvc;
using OperacaoVerao.Models;
using OperacaoVerao.Repositorios;

namespace OperacaoVerao.Controllers
{
    public class CarolController : Controller
    {
        private readonly ICarol _carol;

        public CarolController(ICarol carol)
        {
            _carol = carol;
        }

        public IActionResult Index()
        {
            List<CarolModel> carol = _carol.BuscarTodos();
            return View(carol);
        }
        public IActionResult marcar(string dia)
        {
            CarolModel carol = _carol.BuscarDia(dia);
            return View(carol);
        }


        public IActionResult EditarDia(CarolModel carol)
        {
            _carol.EditarDia(carol);
            return RedirectToAction("Index");
        }

    }
}
