using System;

namespace calculadoraSimples
{
    class Program
    {
        static void Main(string[] args)
        {
            double numero1, numero2;
            try
            {
                Console.WriteLine("digite o primeiro numero: ");
                numero1 = double.Parse(Console.ReadLine());

                Console.WriteLine("digite o segundo numero: ");
                numero2 = double.Parse(Console.ReadLine());

            }
            catch (Exception erro)
            {
                Console.WriteLine(erro.Message);
                throw;
            }
                Console.WriteLine("escolha o seu operador(+, -, /, *)");
                string operador = Console.ReadLine();

            switch (operador)
            {
                case "+":
                    {
                        Console.WriteLine($"{numero1} + {numero2} = {numero1 + numero2}");
                        break;
                    }
                case "-":
                    {
                        Console.WriteLine($"{numero1} - {numero2} = {numero1 - numero2}");
                        break;
                    }
                case "/":
                    {
                        Console.WriteLine($"{numero1} / {numero2} = {numero1 / numero2}");
                        break;
                    }
                case "*":
                    {
                        Console.WriteLine($"{numero1} * {numero2} = {numero1 * numero2}");
                        break;
                    }
                default:
                    {
                        Console.WriteLine("operador invalido");
                        break;
                    }

            }
        }
    }
}