using System.ComponentModel.DataAnnotations;

namespace EstoqueDePeças.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Digite um login valido")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Digite uma senha valida")]
        public string Senha { get; set; }
    }
}
