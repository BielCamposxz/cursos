public class Main extends Carro {
    // esse final e uma variavel final o valor dela nao pode ser modificado
    final int limiteDeVelociadade = 150;

    public static void main() {
        Carro carro = new Carro();
        carro.andar();
        Main main = new Main();
        main.andar();
    }

    @Override
    public void andar() {
        System.out.println("andando");
    }
}