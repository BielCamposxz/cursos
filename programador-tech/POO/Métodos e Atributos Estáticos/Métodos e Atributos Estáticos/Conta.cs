using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Métodos_e_Atributos_Estáticos
{
    public class Conta
    {

        public Conta(int numero, double limit)
        {
            this.Numero = numero;
            this.Limit = limit;
            // toda vez que eu instanciar essa classe o valor sera aumentada
            // ai nao se usa o this para acessar esse atributo
            // para ele ser acessado tem que colocar o nome da classe e chamar o atributo
            Conta.contasCriadas++;
        }
        public double Limit { get; set;  }

        public double Saldo { get; set; }

        public int Numero { get; set; }

        // para criar um atributo statico a so colocar um "static" depois do public
        public static int contasCriadas { get; set; }

        public void Depositar(double valor)
        {
            this.Saldo += valor;
        }

        public static int ProximoTotalDeContasCriadas()
        {
            return Conta.contasCriadas + 1;
        }
 
        public void sacar(double valor)
        {
            this.Saldo -= valor;
        }

        public double ConsultarSaldo()
        {
            return this.Limit + this.Saldo;
        }

    }
}
