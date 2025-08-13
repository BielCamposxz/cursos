using Newtonsoft.Json;
using OperacaoVerao.Models;
using System.Text.Json.Serialization;

namespace OperacaoVerao.helper
{
    public class SessaoDoUsuario : ISessaoDoUsuario
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SessaoDoUsuario(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public UsuarioModel BuscarSessaoDoUsuario()
        {
            string usuario = _httpContextAccessor.HttpContext.Session.GetString("SessaoUsuarioLogado");

            if (string.IsNullOrEmpty(usuario))
            {
                return null;
            }
            else
            {
                return JsonConvert.DeserializeObject<UsuarioModel>(usuario);
            }
        }

        public void CriarSessaoDoUsuario(UsuarioModel usuario)
        {
            string sessaoUsuario = JsonConvert.SerializeObject(usuario);

            _httpContextAccessor.HttpContext.Session.SetString("SessaoUsuarioLogado", sessaoUsuario);
        }

        public void RemoverSessaoDoUsuario()
        {
            _httpContextAccessor.HttpContext.Session.Remove("SessaoUsuarioLogado");
        }
    }
}
