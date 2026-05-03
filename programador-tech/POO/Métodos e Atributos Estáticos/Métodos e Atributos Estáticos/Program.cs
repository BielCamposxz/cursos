using System;
using System.Reflection.Metadata;

namespace Métodos_e_Atributos_Estáticos
{
    class Program
    {
        static void Main(string[] args)
        {
            Conta conta1 = new Conta(123, 500);
            Conta conta2 = new Conta(456, 600);
            Conta conta3 = new Conta(789, 700);

            Console.WriteLine(Conta.contasCriadas);
            Console.WriteLine(Conta.ProximoTotalDeContasCriadas());  
        }
    }
}
