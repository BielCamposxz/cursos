using System;

namespace debugar
{
    class Program
    {
        public static void Main(string[] args)
        {
            string senha = "123456";
            Console.WriteLine("escreva uma senha valida");
            string senhaDigitada = Console.ReadLine();

            if(senhaDigitada == senha)
            {
                Console.WriteLine("sua senha esta correta");
            }
            else
            {
                Console.WriteLine("senha incorreta");
            }
        }
    }
}
