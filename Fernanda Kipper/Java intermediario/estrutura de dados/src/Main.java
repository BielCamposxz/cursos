import java.util.*;

// java colection e um framework do java
// que exeporta um conjunto de classe que ajuda na manipulacao de dados/objetos
public class Main {
    public static void main(String[] args) {

        // as principais estrutura de dados
        // map ele vai ser uma estrutura de chave e valor iguas os objetos no js
        //ex: { name: "gabriel" }

        // set esse e uma estruta que nao existe duplicatas nao pode ter valores repitidos
        // list e uma lista ordenada que podem ter elementos duplicados
        // queue filas usada para processamento em ordem primeiro a entrar e o primeiro a sair

        // com os valores ja execolhidos
        List<String> list = List.of("gabriel", "arthur");

        //com os valores que vao vir de inputs, banco entre outros
        List<String> list2 = new ArrayList<>();
        list2.add("Gabriel");
        list2.add("Arthur");

        // uma lista que nao pode ter valores duplicados
        // aqui os valores vao vir dinamimamente
        // se salvar dois valores iguais nao vai dar erro  os valoes apenas nao vao ser salvos na lista
        Set<String> listaBanco = new HashSet<>();
        list2.add("Gabriel");

        // aqui e para buscar valore com o set isso vai retornar um boolean
        listaBanco.contains("Gabriel");

        // tipo de chave e valor
        // no map eu tenho que passar o tipo da chave e o tipo do valor
        Map<String, String> meuObj =  new HashMap<>();
        // assim eu adiciono valores no map
        meuObj.put("Nome", "Gabriel");

        // para pegar valores no map, coloca o .get e passa a chave do valor que voce quer
        meuObj.get("Nome");


        //Queue
        Queue<String> queue = new LinkedList<>();
        queue.add("Gabriel");
        queue.add("Arthur");

        // ele pega o primeiro valor da fila e remove ele
        // retorna o primeiro valor e remove dps
        queue.poll();

        // esse apenas pega o primeiro valor da fila no remove
        queue.peek();

        // ele remove o primeiro valor e retornar ele as
        // mas a diferenca desse para o poll e que se nao tiver nenhum valor para remover vai lancar um erro
        queue.remove();

    }
}