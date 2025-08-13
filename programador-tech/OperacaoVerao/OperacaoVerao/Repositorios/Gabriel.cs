using Microsoft.AspNetCore.Mvc;
using OperacaoVerao.Data;
using OperacaoVerao.Models;

namespace OperacaoVerao.Repositorios
{
    public class Gabriel : IGabriel
    {
        private readonly BancoContext _bancoContext;

        public Gabriel(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }



        public GabrielModel BuscarDia(string dia, int id)
        {
            return _bancoContext.Gabriel.FirstOrDefault(gabriel => gabriel.Id == id);
        }

        [HttpPost]
        public GabrielModel EditarDia(GabrielModel gabriel)
        {
            GabrielModel GabrielDb = BuscarDia(gabriel.Dia, gabriel.Id);

            GabrielDb.Musculo = gabriel.Musculo;
            GabrielDb.treinou = true;

            _bancoContext.Gabriel.Update(GabrielDb);
            _bancoContext.SaveChanges();
            return GabrielDb;
        }

        public List<GabrielModel> BuscarTodos()
        {
            return _bancoContext.Gabriel.ToList();
        }
    }
}
