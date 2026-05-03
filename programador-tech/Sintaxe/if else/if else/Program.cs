using System;
using System.Security.Principal;

namespace ifelse
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome;
            double nota1, nota2, nota3, media;

            Console.WriteLine("digite o nome do aluno: ");
            nome = Console.ReadLine();

            Console.WriteLine("digite a nota 1");
            nota1 = double.Parse(Console.ReadLine());

            Console.WriteLine("digite a nota 2");
            nota2 = double.Parse(Console.ReadLine());

            Console.WriteLine("digite a nota 3");
            nota3 = double.Parse(Console.ReadLine());

            media = (nota1 + nota2 + nota3) / 3;

            Console.WriteLine("ola " + nome);
            Console.WriteLine("sua media final e: " + media);

            if(media > 6)
            {
                Console.WriteLine("parabens voce foi aprovado");
            }
            else if(media == 6)
            {
                Console.WriteLine("voce foi aprovado, mas foi por pouco");
            }
            else
            {
                Console.WriteLine("voce foi reprovado");
            }
        }
    }
}