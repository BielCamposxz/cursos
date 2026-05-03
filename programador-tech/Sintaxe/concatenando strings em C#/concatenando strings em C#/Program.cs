using System;

namespace ConcatenandoStringsEmCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome = "gabriel campos";
            string sobrenome = "figueira";
            //e possivel concatenar string em c# com o sinal de +
            string nomeCompleto = "ola, " + nome + " " + sobrenome;
            Console.WriteLine(nome + sobrenome);
            Console.WriteLine(nomeCompleto);
        }
    }
}
