using OperacaoVerao.Models;

namespace OperacaoVerao.Repositorios
{
    public interface IGabriel
    {
        public GabrielModel EditarDia(GabrielModel gabriel);
        public GabrielModel BuscarDia(string dia, int id);

        public List<GabrielModel> BuscarTodos();

    }
}
