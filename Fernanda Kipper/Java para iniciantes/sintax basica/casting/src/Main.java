public class Main {
    // o casting e algo que a permite a gente fazer a conversao de um tipo de dados para outro
    //ex: uma String 10 e ser convertida em um outra variavel para um byte 10


    // isso e casting esta transformando double para int
    // em string nn funciona
    double resultado = 0.0;
    int resultadoInt = (int) resultado;

    // isso ja trasnforma de int para double
    int idade = 10;
    double idadeDouble = idade;

    String Numero = "10";
    // isso transforma de String para int
    // chama o Integer.ParseInt e passa a variavel que eu quero transformar
    int numero2 = Integer.parseInt(Numero);

    //para trasformar de inteiro para String
    String valor = String.valueOf(numero2);

}
