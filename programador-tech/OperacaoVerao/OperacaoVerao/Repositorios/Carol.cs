using Microsoft.AspNetCore.Mvc;
using OperacaoVerao.Data;
using OperacaoVerao.Models;

namespace OperacaoVerao.Repositorios
{
    public class Carol : ICarol
    {
        private readonly BancoContext _bancoContext;

        public Carol(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        public CarolModel BuscarDia(string dia)
        {
            return _bancoContext.Carol.FirstOrDefault(carol => carol.Dia == dia);
        }

        [HttpPost]
        public CarolModel EditarDia(CarolModel carol)
        {
            CarolModel carolDb = BuscarDia(carol.Dia);

            carolDb.treinou = true;
            carolDb.Musculo = carol.Musculo;

            _bancoContext.Carol.Update(carolDb);
            _bancoContext.SaveChanges();
            return carol;
        }

        public List<CarolModel> BuscarTodos()
        {
            return _bancoContext.Carol.ToList();
        }
    }
}
