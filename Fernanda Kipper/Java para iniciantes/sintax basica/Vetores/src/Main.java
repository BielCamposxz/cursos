public class Main {
    // vetores ou array e uma lista para armazenar dados do mesmo tipo

    // declarar um array no java
    // isso aqui define um tamanho final para o array ou seja nao da para adcionar um novo valor no final do array
    // dessa forma ja inicializa com valoreas
    int[] idades = {1, 2, 3};

    // isso cria o arrya mas vazio sem o valores e tem que ter um valor
    // o 5 e o tamanho do array
    int[] numeros = new int[5];

    public void main() {
        // mostra o tamanho do array
        System.out.println(numeros.length);
    }
}