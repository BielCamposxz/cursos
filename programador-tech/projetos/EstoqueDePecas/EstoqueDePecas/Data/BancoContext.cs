using EstoqueDePecas.Models;
using Microsoft.EntityFrameworkCore;

namespace EstoqueDePecas.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {

        }

        public DbSet<PecasModel> Pecas { get; set; }
    }
}
