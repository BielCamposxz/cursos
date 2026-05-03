import java.util.ArrayList;

public class Main {
    // os array list sao array mas nao tem um tamanho definido

    // sintax para criar um arraylis
    public void main() {
        ArrayList<String> Nomes = new ArrayList<>();
        // isso adiciona um valor no final da lista
        Nomes.add("Gabriel");
        Nomes.add("Gabriel");
        Nomes.add("Gabriel");

        // isso pega o valor na posicao 0
        System.out.println(Nomes.get(0));


        System.out.println(Nomes.get(0));

        // remove o index 0
        Nomes.remove(0);

        // aqui eu posso remover pelo valor direto
        Nomes.remove("Gabriel");
    }

}