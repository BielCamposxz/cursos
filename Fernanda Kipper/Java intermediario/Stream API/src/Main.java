import java.util.ArrayList;

public class Main {
    // ele permite fazer operacoes funcionais em colecoes
    // filter, map, reduce, agregacoes
    public static void main() {
        ArrayList<String> minhaLista = new ArrayList<>();
        minhaLista.add("Gabriel");
        minhaLista.add("arthur");
        minhaLista.add("saymon");

        // isso ta filtrando na minha lista um valor que comeca com G e retorna uma lista
        minhaLista.stream()
                .filter(x -> x.startsWith("G"))
                .map(x -> x.toUpperCase())
                .toList();
    }


}