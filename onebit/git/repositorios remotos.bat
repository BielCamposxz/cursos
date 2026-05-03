para clonar um repositorio basta dar um "git clone url-do-repositorio" para pegar todos os arquivos do repositorio

quando possuir commits que deseja integrarr ao repositorio remoto, envie-os com o git push nome-do-remote nome-da-branch

quando quiser sincronizar o repositorio para manter o projeto local atualizado use o git pull nome-do-remote nome-da-branch

o push e para enviar as alteracaoes 
e pull e para trazer as alteracaoes mas eu ja teria que ter a pasta 
do repositorio na minha maquina

1. git remote add origin https://github.com/BielCamposxz/meu-primeiro-repo-remoto.git


2. depois git push "nome do repositorio" "nome da branch que vai ser enviada"


FAZER ISSO APENAS UMA VEZ POR MAQUINA CASO NAO TENHA
MAS SE EU JA TENHO FEITO ISSO EM UM COMPUTADOR BASTA EU PEGAR O AQUIVO PRIVADO E COLOCAR NESSE COMPUTADOR
"ssh-keygen -C SeuEmail" no terminal do git bash para criar uma chave ssh

adicionar a chave public no https://github.com/settings/keys

rodar isso eval "$(ssh-agent -s)"

ssh-add ~/figue/.ssh/id_ed25519 configurar a chave privada no terminal na pasta do projeto

forks e meio que criar uma copia de um projeto para voce