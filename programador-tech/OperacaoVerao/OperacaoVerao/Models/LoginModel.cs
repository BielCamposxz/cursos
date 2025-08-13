using System.ComponentModel.DataAnnotations;

namespace OperacaoVerao.Models
{
    public class LoginModel
    {

        [Required(ErrorMessage = "Digite um valor valido")]
        public string Login {  get; set; }

        [Required(ErrorMessage = "Digite um valor valido")]
        public string Senha { get; set; }
    }
}
