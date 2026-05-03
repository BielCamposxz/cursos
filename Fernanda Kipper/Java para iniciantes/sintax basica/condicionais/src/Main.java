public class Main {
    //inteiras
    byte idade = 10;
    short idade2 = 100;
    int idade3 = 111111;
    // tem que ter um L no final do long
    long idade4 = 1100000000000000L;

    // decimais
    double media = 10.122;
    // no float tem que ter um f no final
    float media2 = 1.4f;

    // Texto
    String nome = "Gabriel";
    char primeira = 'a';

    boolean IsAdmin = true;

    public void main() {
        // verifica se o nome e igual a gabriel
        if(nome.equals("Gabriel")) {
            System.out.println("E administrador");
        }

        // o isBlank verifica se uma string e vazia
        if(nome.isBlank()) {
            System.out.println("vazia");
        }


        if(nome.isBlank()) {
            System.out.println("String vazia");
        } else if(nome.equals("gabriel")) {
            System.out.println("ola");
        }
        else {
            System.out.println("OIII");
        }
    }

}