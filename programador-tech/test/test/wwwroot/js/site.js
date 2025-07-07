const senha = document.getElementById("Senha");
const confirmarSenha = document.getElementById("ConfirmarSenha");
const criar = document.getElementById("Criar");

function verificarSenhas() {
    if (
        senha.value !== "" &&
        confirmarSenha.value !== "" &&
        senha.value === confirmarSenha.value
    ) {
        criar.removeAttribute("disabled");
    } else {
        criar.setAttribute("disabled", true); 
    }
}

senha.addEventListener("input", verificarSenhas);
confirmarSenha.addEventListener("input", verificarSenhas);
