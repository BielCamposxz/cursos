using ControleDeContatos.Models;

namespace ControleDeContatos.repositorio
{
    public interface IUsuarioRepositorio
    {

        UsuarioModel BuscarPorLogin(string login);
        bool Apagar(int id);
        UsuarioModel Alterar(UsuarioModel usuario);
        UsuarioModel ListarPorId(int id); 
        List<UsuarioModel> BuscarTodos();
        UsuarioModel Adicionar(UsuarioModel usuario);
    }
}
