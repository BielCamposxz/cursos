public class Main {
    // os records sao uma nova forma de declarar uma nova classe
    // sao uma classe que depois que ela foi instaciada os dados dessa classe nao vao poder ser modificados

    public static void main() {
        Carro carro = new Carro("corolla", "vermelho", 2020);
        // isso e meio que um metodo para mostrar o valor intanciado da classe
        // e esses valores nao podem ser alteradas
        // isso e bom usar para quando eu receber uma requisicao e for usar ela para alguma coisa
        // ex: recebi um dado para fazer um query ai com isso esses nao devem ser alterados isso e um exemplo de DTOs
        // DTOs data trasnfer objects
        carro.ano();
    }
}