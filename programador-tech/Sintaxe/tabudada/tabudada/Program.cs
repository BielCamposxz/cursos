using System;

namespace tabuada
{
    class Program
    {
        static void Main(string[] args)
        {
            //eu fiz
            Console.WriteLine("digite qual numero voce quer saber a tabuada do 10: ");
            int numero = int.Parse(Console.ReadLine());

            for(var i = 0;i <= 10; i++)
            {
                Console.WriteLine($"{i} X {numero} = {i * numero}");
            }

            //cara do curso
            double valor;
            int quantidade;
            Console.WriteLine("digite um numero da tabuada: ");
            valor = double.Parse(Console.ReadLine());

            Console.WriteLine("digite o valor da quantidade");
            quantidade = int.Parse(Console.ReadLine());

            for (int y = 0; y <= quantidade; y++) {
                double total = y * valor;
                Console.WriteLine(valor + " x " + y + " = " + total);
            }
        }
    }
}