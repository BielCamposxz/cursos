// os packeges sao meio que pacotes que agrupao determinadas classes e arquivos
// sao tipo grupos de arquivos especificos
// ex: crio um package de "AdminRepositorios" e "IAdminRepositorios" entao com isso vai meio que vai agrupar esses dois arquivos para evitar conflitos com outros
// e todas as classes e metodos de um pacote so podem ser vistas pelo mesmo pacote e de acordo com o encapsulamento
// nao pode ter duas classes publicas dentro do mesmo arquivo
// se eu tentar usar algo que esta em outro pacote eu nn consigo acessar

public class Main {
    // modificadores de acesso:
    // se nao declarar nenhum modificador de acesso fica no modificador default que esse a classe so pode ser vista dentro no mesmo packege
    // public as clases e metodos vao ser acessiveis de qualquer lugar independente do packege
    // private so podem ser usadas dentro da propria classe apenas dentro da propria classe
    // protected ele so pode ser visto dentro do mesmo arquivo, em sub classes da classe pai ou no mesmo pacote
}