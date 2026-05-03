using EstoqueDePecas.Data;
using EstoqueDePecas.Models;

namespace EstoqueDePecas.Repositorios
{
    public class EstoqueRepositorio : IEstoqueRepositorio
    {
        private readonly BancoContext _bancoContext;

        public EstoqueRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;    
        }

        public PecasModel AdicionarPeca(PecasModel peca)
        {
            _bancoContext.Pecas.Add(peca);
            _bancoContext.SaveChanges();
            return peca;
        }

        public List<PecasModel> BuscarTodos()
        {
            return _bancoContext.Pecas.ToList();
        }
    }
}
