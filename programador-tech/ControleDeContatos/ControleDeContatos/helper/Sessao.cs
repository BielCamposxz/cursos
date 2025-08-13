using ControleDeContatos.Models;
using Newtonsoft.Json;

namespace ControleDeContatos.helper
{
    public class Sessao : ISessao
        // para criar uma sessao do usuario voce tem que importar o httpcontext
    {
        // criar a variavel com os metodos usados para a criacao da sessao do usuario
        private readonly IHttpContextAccessor _httpContextAccessor;

        public Sessao(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        // busca a sessao que foi criada
        public UsuarioModel BuscarSessaoDoUsuario()
        {
            // isso aqui voce busca a sessao que foi criada na hora do login que seria a "sessaoUsuarioLogado"
            string sessaoUsuario = _httpContextAccessor.HttpContext.Session.GetString("sessaoUsuarioLogado");
            // se a sessao do usuario for null ou vazio faca isso
            if(string.IsNullOrEmpty(sessaoUsuario))
            {
                return null;
            }
            else
            {
                // transforma de string para objeto ai fala que vai ser transformado para um "UsuarioModel" e logo na frente a string que vai ser transformada
                 return JsonConvert.DeserializeObject<UsuarioModel>(sessaoUsuario);
            }
        }

        // metodo que cria uma sessao quando voce faz login
        public void CriarSessaoDoUsuario(UsuarioModel usuario)
        {
        // isso aqui transforma um objeto em uma string
        string valor = JsonConvert.SerializeObject(usuario);
            // isso criar uma sessao do usuario
            // dento do setString temos uma chave e valor a chave e o nome da sessao e o valor seria so dados do usuario
            _httpContextAccessor.HttpContext.Session.SetString("sessaoUsuarioLogado", valor);
        }

        public void RemoverSessaoDoUsuario()
        {
            // essa linha vai remover a sessao do usuario
            _httpContextAccessor.HttpContext.Session.Remove("sessaoUsuarioLogado");
        }
    }
}
