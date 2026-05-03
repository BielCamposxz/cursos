using System;

namespace operadoresLogicos
{
    class Program 
    {
        static void Main(string[] args)
        {
            string nome;
            int idade;

            Console.WriteLine("digite o seu nome: ");
            nome = Console.ReadLine();

            Console.WriteLine("qual sua idade: ");
            idade = int.Parse(Console.ReadLine());

            if(nome == "gabriel" && idade == 16)
            {
                Console.WriteLine("seu nome e gabriel e voce tem 16 anos");
            }

            if(nome == "gabriel" || idade == 16)
            {
                Console.WriteLine("seu nome pode ser gabriel ou voce tem 16 anos");
            }

            Boolean v = false;
            Boolean f = true;

            if(!v)
            {
                Console.WriteLine("a primeira condicao e verdadeira");
            }

            if(f)
            {
                Console.WriteLine("a segunda condicao e verdadeira");
            }
        }
    }
}