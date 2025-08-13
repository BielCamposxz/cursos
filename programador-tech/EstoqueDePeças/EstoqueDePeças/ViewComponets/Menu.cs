using EstoqueDePeças.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using Newtonsoft.Json;

namespace EstoqueDePeças.ViewComponets
{
    public class Menu : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            string sessao = HttpContext.Session.GetString("UsuarioLogado");

           if(string.IsNullOrEmpty(sessao))
            {
                return null;
            }

           UsuarioModel usuario = JsonConvert.DeserializeObject<UsuarioModel>(sessao);
           
           return View(usuario);
        }
    }
}
