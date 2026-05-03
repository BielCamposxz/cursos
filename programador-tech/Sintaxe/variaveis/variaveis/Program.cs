using System;

namespace Variaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            //para declarar uma variavel em C# voce tem que declarar o tipo dela e o nome
            string nome = "gabriel";
            int idade = 16;
            //esse "double" sao os numeros com virgula, seria o float no javascript
            double altura = 1.80;
            Boolean isHuman = true;

            Console.WriteLine("aprendendo a criar variaveis em c#");

            //mostar uma variavel na tela
            Console.WriteLine(nome);
            //para mostar uma variavel dentro de uma string voce pode usar o $ antas das aspas para poder interpolar a variavel
            Console.WriteLine($"seja bem vindo {nome}");
            //voce tambem pode concatenar a variavel com uma string com o +
            Console.WriteLine("como foi o seu dia " + nome);
            Console.WriteLine($"voce tem {idade} anos de idade");
            Console.WriteLine($"voce tem {altura} metros de altura");
            Console.WriteLine("voce e um humano " + isHuman);
        }

    }
}