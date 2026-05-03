branches sao ramificacoes que permitem trabalhar em diferentes linhas de desenvolvimento dentro de um mesmo repositorio

cada branche pode conter uma serie de commits independetes permitindo que os desenvolvedores trabalhem em funcionalidades ou correcoes sem interferir na branch principal

porque usar as branches?

permitem isolar o trabalho em funcionalidades novas ou em correcao de bugs facilitando o desenvolvimento parelelo

facilita a colaboracao entre desenvolvedores permitindo que cada um trabalhe em sua propria branche

comandos

git branch Nome-da-branche: cria um nova branche

git checkout Nome-da-branche: muda para uma outra branche

git branche: para mostras todas as branches disponiveis

git branch -d Nome-da-branch: deleta uma branche

git branch -m Nome-da-branch: modifica o nome da branch atual

git merge nome-da-branche: integra mudancas de uma branch para outra
esse comando aplica as mudancas da branch especificada na branch atual
ou seja eu teria que esta na branche master e rodar o comando para trazer os commits de outra branche para a principal

conflitos do merge:
e quando o git nao consegue automaticamente combinar mudanças de duas branches diferentes

ex: e quando um desenvolvedor exclui uma linha ou arquivo que outro desenvolvedor modificou

como indentificar?
o git mostra o erro e mostra os arquivo que causou o erro

depois de resolver e so fazer um commit no arquivo que voce quer juntas as branch