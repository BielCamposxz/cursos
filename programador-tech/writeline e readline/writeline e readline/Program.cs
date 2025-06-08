using System;

namespace WriteLineReadLine
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome = null;
            int idade = 16;
            double salario = 759.87;

            //readline
            //isso e um input
            //essa linha pega oque for escrito no terminal e salva na variavel nome
            //mostrando mensagem no console, para escrever o nome
            Console.WriteLine("qual o seu nome? ");
            nome = Console.ReadLine();
        }
    }
}
