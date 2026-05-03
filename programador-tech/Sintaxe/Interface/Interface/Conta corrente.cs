using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interfaces
{
    public class Conta_corrente : Conta, Iconta
    {
        public Conta_corrente(double salario) : base(salario)
        {
            this.salario = salario;
        } 

        public override void depositar(int valor)
        {
            // isso me permite eu chamar o metodo depositar e depois fazer alguma outra coisa
            base.depositar(1000);
            this.salario += 1000;
        }
    }
}
