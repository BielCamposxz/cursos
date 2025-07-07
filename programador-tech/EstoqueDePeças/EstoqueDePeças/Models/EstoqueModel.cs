using System.ComponentModel.DataAnnotations;

namespace EstoqueDePeças.Models
{
    public class EstoqueModel
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Digite um valor valido")]
        public string Produto { get; set; }
        [Required(ErrorMessage = "Digite um valor valido")]
        public int EmEstoque { get; set; }
        [Required(ErrorMessage = "Digite um valor valido")]
        public double Preco { get; set; }
    }
}
