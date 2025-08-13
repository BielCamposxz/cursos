using EstoqueDePeças.Models;

namespace EstoqueDePeças.helper
{
    public interface ISessao
    {
        void CriarSessaoDoUsuario(UsuarioModel usuario);
        UsuarioModel BuscarSessaoDoUsuario();
        void RemoverSessaoDoUsuario();
    }
}
