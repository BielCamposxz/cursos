using System.ComponentModel.DataAnnotations;

namespace ControleDeContatos.Models
{
    public class ContatoModel
    {
        public int Id { get; set; }

        // isso fala que esse campos sao obrigatorio
        [Required(ErrorMessage = "Digite o nome do contato")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Digite o email do contato")]
        //verifica se o email e valido
        [EmailAddress(ErrorMessage = "O email nao e valido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Digite o numero de celular do contato")]
        // verifica se e um numero de celular valido
        [Phone(ErrorMessage = "Digite um numero de celular valido")]
        public string Celular { get; set; }
    }
}
