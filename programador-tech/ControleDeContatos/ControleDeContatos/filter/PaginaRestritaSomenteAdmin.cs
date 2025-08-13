using ControleDeContatos.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace ControleDeContatos.filter
{
    public class PaginaRestritaSomenteAdmin : ActionFilterAttribute
    {
      
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            string sessaoUsuario = context.HttpContext.Session.GetString("sessaoUsuarioLogado");

            if(string.IsNullOrEmpty(sessaoUsuario))
            {
                // se nao tiver um usuario logado vai direcionar para a controler login e o metodo Index
                context.Result = new RedirectToRouteResult(new RouteValueDictionary { {"Controller", "Login"}, { "action", "Index" } });
            }
            else
            {
                UsuarioModel usuario = JsonConvert.DeserializeObject<UsuarioModel>(sessaoUsuario);

                if(usuario == null)
                {
                    context.Result = new RedirectToRouteResult(new RouteValueDictionary { { "Controller", "Login" }, { "action", "Index" } });
                }
                
                if(usuario.Perfil != enums.PerfilEnum.Administrador)
                {
                    context.Result = new RedirectToRouteResult(new RouteValueDictionary { { "Controller", "Home" }, { "action", "Bloqueio" } });

                }
            }
                base.OnActionExecuted(context);
            
        }
    }
}
