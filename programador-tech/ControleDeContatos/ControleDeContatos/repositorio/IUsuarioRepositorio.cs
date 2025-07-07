using ControleDeContatos.Models;

namespace ControleDeContatos.repositorio
{
    public interface IUsuarioRepositorio
    {
        bool Apagar(int id);
        UsuarioModel Alterar(UsuarioModel usuario);
        UsuarioModel ListarPorId(int id); 
        List<UsuarioModel> BuscarTodos();
        UsuarioModel Adicionar(UsuarioModel usuario);
    }
}
