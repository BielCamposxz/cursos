using OperacaoVerao.Models;

namespace OperacaoVerao.Repositorios
{
    public interface ICarol
    {
        public CarolModel EditarDia(CarolModel carol);
        public CarolModel BuscarDia(string dia);

        public List<CarolModel> BuscarTodos();
    }
}
