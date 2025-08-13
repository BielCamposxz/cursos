using ControleDeContatos.enums;
using System.ComponentModel.DataAnnotations;

namespace ControleDeContatos.Models
{
    public class UsuarioSemSenhaModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "digite um valor valido")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "digite um valor valido")]
        public string Login { get; set; }

        [Required(ErrorMessage = "digite um valor valido")]
        [EmailAddress(ErrorMessage = "digite um email valido")]
        public string Email { get; set; }

        // fala que o perfil vai ser alguns dos valores que eu indiquei no enum
        [Required(ErrorMessage = "Selecione um valor")]
        public PerfilEnum? Perfil { get; set; }

    }
}
