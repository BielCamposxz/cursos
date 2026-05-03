using System;

namespace testeDeVelocidade
{
    class Program
    {
        static void Main(string[] args)
        {
            string carName1, carName2;
            int carSpeed1, carSpeed2;

            Console.Write("digite o nome do carro 1: ");
            carName1 = Console.ReadLine();

            Console.Write("digite o nome do carro 2: ");
            carName2 = Console.ReadLine();

            Console.Write("digite a velocidade do carro 1: ");
            carSpeed1 = int.Parse(Console.ReadLine());

            Console.Write("digite a velocidade do carro 2: ");
            carSpeed2 = int.Parse(Console.ReadLine());

            if(carSpeed1 == carSpeed2)
            {
                Console.WriteLine("os carros estao na mesma velocidade");
            } else if (carSpeed1 > carSpeed2)
            {
                Console.WriteLine($"o carro {carName1} esta mais rapido que o {carName2}");
            } else
            {
                Console.WriteLine($"o carro {carName2} esta mais rapido que o {carName1}");
            }

        }
    }
}