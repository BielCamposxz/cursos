using EstoqueDePeças.Models;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace EstoqueDePeças.helper
{
    public class Sessao : ISessao
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public Sessao(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public void CriarSessaoDoUsuario(UsuarioModel usuario)
        {
            string valor = JsonConvert.SerializeObject(usuario);

            _httpContextAccessor.HttpContext.Session.SetString("UsuarioLogado", valor);
        }


        public UsuarioModel BuscarSessaoDoUsuario()
        {
            string usuario = _httpContextAccessor.HttpContext.Session.GetString("UsuarioLogado");
            if(usuario == null)
            { 
                return null;
            }
            else
            {
                return JsonConvert.DeserializeObject<UsuarioModel>(usuario);
            }
        }

        public void RemoverSessaoDoUsuario()
        {
            _httpContextAccessor.HttpContext.Session.Remove("UsuarioLogado");
        }
    }
}
