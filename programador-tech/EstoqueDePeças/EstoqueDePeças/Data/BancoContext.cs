using EstoqueDePeças.Models;
using Microsoft.EntityFrameworkCore;

namespace EstoqueDePeças.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {

        }

        public DbSet<EstoqueModel> Estoque { get; set;  }
        public DbSet<FuncionarioModel> Funcionario { get; set; }
    }
}
