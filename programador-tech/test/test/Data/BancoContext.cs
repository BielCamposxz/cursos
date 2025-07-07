using Microsoft.EntityFrameworkCore;
using test.Models;

namespace test.Data
{
    public class BancoContext : DbContext
    {

        public BancoContext(DbContextOptions<BancoContext> opcoes) : base(opcoes)
        {
            
        }

        public DbSet<PessoasModel> Pessoas { get; set; }
        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}
