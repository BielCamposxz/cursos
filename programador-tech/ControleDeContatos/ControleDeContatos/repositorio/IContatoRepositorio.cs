using ControleDeContatos.Models;

namespace ControleDeContatos.repositorio
{
    public interface IContatoRepositorio
    {
        bool Apagar(int id);
        ContatoModel Alterar(ContatoModel contato);
        ContatoModel ListarPorId(int id); 
        List<ContatoModel> BuscarTodos();
        ContatoModel Adicionar(ContatoModel contato);
    }
}
