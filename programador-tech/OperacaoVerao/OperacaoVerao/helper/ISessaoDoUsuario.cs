using OperacaoVerao.Models;

namespace OperacaoVerao.helper
{
    public interface ISessaoDoUsuario
    {
        public UsuarioModel BuscarSessaoDoUsuario();
        public void RemoverSessaoDoUsuario();
        public void CriarSessaoDoUsuario(UsuarioModel usuario);


    }
}
