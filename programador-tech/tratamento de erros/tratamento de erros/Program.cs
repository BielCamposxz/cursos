using System;

namespace tratamentoDeErros
{
    class Program
    {
        static void Main(string[] args)
        {
            int idade;

            try
            {
                Console.WriteLine("digite sua idade");
                idade = int.Parse(Console.ReadLine());

                Console.WriteLine("sua idade e: " + idade);
            }
            // esse "Exception" fica esperando uma variavel para armazenar oque causou o erro nela
            catch (Exception erro)
            {
                Console.WriteLine("ocorreu um erro informe uma idade valida: " + erro.Message);
                throw;
            }

            
        }
    }
}