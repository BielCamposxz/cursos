using System;

namespace visitandoNovasCidades
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> cidades = new List<string>() { };
            string resposta;
            Console.Write("digite o seu nome: ");
            string nome = Console.ReadLine();

            do
            {
                Console.WriteLine("voce ja visitou alguma cidade? ");
                resposta = Console.ReadLine();
                if(resposta == "sim")
                {
                    Console.WriteLine("qual o nome da cidade visitada? ");
                    string cidade = Console.ReadLine();
                    cidades.Add(cidade);
                }
                Console.Clear();
            } while (resposta == "sim");
            Console.Clear();
            Console.WriteLine($"ola, {nome}");
            foreach(var item in cidades)
            {
                Console.WriteLine($"voce ja visitou {item}");
            }
        }
    }
}
