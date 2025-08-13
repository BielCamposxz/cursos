using OperacaoVerao.Models;
using Microsoft.EntityFrameworkCore;
using OperacaoVerao.Models;

namespace OperacaoVerao.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {
            

        }

        public DbSet<GabrielModel> Gabriel { get; set; }
        public DbSet<CarolModel> Carol { get; set; }

        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}
