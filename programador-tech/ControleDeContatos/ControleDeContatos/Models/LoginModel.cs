using System.ComponentModel.DataAnnotations;

namespace ControleDeContatos.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "digite um login")]
        public string Login { get; set; }
        [Required(ErrorMessage = "digite uma senha")]
        public string Senha { get; set; }
    }
}
