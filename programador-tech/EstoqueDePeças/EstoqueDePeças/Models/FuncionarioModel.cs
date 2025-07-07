using System.ComponentModel.DataAnnotations;

namespace EstoqueDePeças.Models
{
    public class FuncionarioModel
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Digite um valo valido")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Digite um valo valido")]
        public string Cargo { get; set; }

        [Required(ErrorMessage = "Digite um valo valido")]
        public double salario { get; set; }

    }
}
