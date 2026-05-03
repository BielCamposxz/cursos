using ControleDeContatos.Models;

namespace ControleDeContatos.Repositorio
{
    public interface IContatoRepositorio
    {
        public List<ContatoModel> BuscarTodos();
        public ContatoModel Adicionar(ContatoModel contato);

    }
}
