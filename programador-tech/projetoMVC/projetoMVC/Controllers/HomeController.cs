using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using projetoMVC.Models;

namespace projetoMVC.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            HomeModel home = new HomeModel();
            home.Nome = "gabriel";
            home.Email = "gabriel@gmail.com";
            // joga os valores dentro da view
            return View(home);
        }

        public IActionResult Privacy()
        {
            HomeTermos termos = new HomeTermos();
            termos.termo = true;
            return View(termos);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
