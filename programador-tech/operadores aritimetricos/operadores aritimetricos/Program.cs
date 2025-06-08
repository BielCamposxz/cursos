using System;

namespace OperadoresAritimetricos
{
    class Program
    {
        static void Main(string[] args)
        {
            //isso criar duas variaveis sem nada dentro
            double valor1, valor2;

            valor1 = 10;
            valor2 = 5;

            double soma = valor1 + valor2;
            double multiplicacao = valor1 * valor2;
            double divisao = valor1 / valor2;
            double subtracao = valor1 - valor2;
            double media = (valor1 + valor2) / 2;

            Console.WriteLine($"a soma de {valor1} mais {valor2} e igual a {soma}");
            Console.WriteLine($"a multiplicacao do {valor1} vezes {valor2} e igual a {multiplicacao}");
            Console.WriteLine($"a divisao de {valor1} dividido {valor2} e igual a {divisao}");
            Console.WriteLine($"a subtracao de {valor1} menos {valor2} e igual a {subtracao}");
            Console.WriteLine($"a media de {valor1} mais {valor2} e igual a {media}");

        }
    }
}