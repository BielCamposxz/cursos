using Criando_Métodos;
using System;

namespace criandoMetodos
{
    class Program
    {
        static void Main(string[] args)
        {
            Conta conta1 = new Conta(123, 300);


            conta1.MudarLimit(500);
            conta1.depositar(1000);
            conta1.depositar(2500);
            conta1.depositar(4000);

            bool saca = conta1.sacarDinheiro(1000);

            if(saca)
            {
                Console.WriteLine(conta1.mostrarSaldo());
                Console.WriteLine(conta1.numero);
            }


        }
    }
}
