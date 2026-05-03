using EstoqueDePecas.Models;

namespace EstoqueDePecas.Repositorios
{
    public interface IEstoqueRepositorio
    {
        public List<PecasModel> BuscarTodos();
        public PecasModel AdicionarPeca(PecasModel peca);
    }
}
