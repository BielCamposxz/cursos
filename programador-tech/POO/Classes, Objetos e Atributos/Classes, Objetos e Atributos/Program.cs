using Classes__Objetos_e_Atributos;
using System;

namespace ClassesObjetosEAtributos
{
    class Program
    {
        static void Main(string[] args)
        {
            // primeiro voce coloca o nome da class no lugar do tipo
            // depois voce coloca o nome
            // depois instacia como no javascript
            conta conta1 = new conta();
            conta conta2 = new conta();


            conta1.Saldo = 1500;
            conta1.Limit = 500;
            conta1.NumeroDaConta = 123;

            conta2.Saldo = 2000;
            conta2.Limit = 600;
            conta2.NumeroDaConta = 456;

            Console.WriteLine("conta 1");
            Console.WriteLine(conta1.Saldo);
            Console.WriteLine(conta1.Limit);
            Console.WriteLine(conta1.NumeroDaConta);

            Console.WriteLine("conta 2");
            Console.WriteLine(conta2.Saldo);
            Console.WriteLine(conta2.Limit);
            Console.WriteLine(conta2.NumeroDaConta);

        }
    }
}

