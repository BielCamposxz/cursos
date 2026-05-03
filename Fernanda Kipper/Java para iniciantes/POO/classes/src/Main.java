public class Main {
    // esse metodo e o primeiro metodo a ser chamado entao ele sempre vai ser o primeiro a ser executado
    // quando essa classe e chamada para ser executada o esse metodo ja vai ser chamado
    // esse e o metodo principal que comeca o programa se eu nao chamar nada nele o projeto nao funciona
    public static void main(String[] args) {
        // assim eu crio uma instacia de uma classe
        Carro carro1 = new Carro("Corrola");
        Carro carro2 = new Carro("Fusca");
        Carro carro3 = new Carro("BMW");

        carro1.MostrarModelo();
    }

}

class Carro {
    // esse o contrutor da classe carro
    // o nome do contrutor tem que ser o mesmo noma da classe igual no c#

    String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;
    }

    public void MostrarModelo() {
        System.out.println(this.modelo);
    }

}