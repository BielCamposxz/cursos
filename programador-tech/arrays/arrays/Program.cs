using System;

namespace arrays
{
    class Program 
    {
        static void Main(string[] args)
        {
            //para criar um array primeiro eu tenho que declarar o tipo e logo apos um conchete ex: "int[]" o nome do array igual e tem que colocar "new" e logo na frente o tipo do array novamente com conchetes e dentro do conchete voce colocar o tamanho do array
            string[] nome = new string[5];
            int[] ano = new int[4];
            nome[0] = "gabriel";
            nome[1] = "felipe";
            nome[2] = "paulo";
            nome[3] = "maju";

            ano[0] = 12;
            ano[1] = 11;
            ano[2] = 10;
            ano[3] = 15;

            Console.WriteLine("meu nome: " + nome[0]);
            Console.WriteLine("meu nome: " + nome[1]);
            Console.WriteLine("meu nome: " + nome[2]);
            Console.WriteLine("meu nome: " + nome[3]);
        }
    }
}