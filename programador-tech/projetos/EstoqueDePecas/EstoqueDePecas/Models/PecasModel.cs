using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace EstoqueDePecas.Models
{
    public class PecasModel
    {
        public int Id { get; set; }
        public int Codigo { get; set; }

        public string Nome { get; set; }

        public string Fornecedor { get; set; }

        public int Quantidade { get; set; }

        public string Localizacao { get; set; }

    }
}
