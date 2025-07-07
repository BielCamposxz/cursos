using ControleDeContatos.Models;
using Microsoft.EntityFrameworkCore;

namespace ControleDeContatos.Data
{
    public class BancoContext : DbContext
    {
        // primeiro tem que configurar o contrutor desse jeito
        // passando o DbcontextOptions e tipando ele com o nome da classe 
        // e depois passar o base com o nome do tipo
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {

        }

        // o dbset e para falar que vamos criar uma tabela e o <contatoModel> e a model que vai as colunas da tabela
        public DbSet<ContatoModel> Contatos { get; set; }
        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}
