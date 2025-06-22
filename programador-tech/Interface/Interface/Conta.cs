using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interfaces
{
    // e possivel usar mais de uma interface por vez e so separar pro virgula
    public abstract class Conta : Iconta
    {
        public double salario { get; set; }

        public Conta(double salario)
        {
            this.salario = salario;
        }
        // permite que qualquer outra classe que herda ele seja sobre escrita
        // metodos so podem ser sobre escritos quando sao abstratos ou contem o virtual
        public virtual void depositar(int valor)
        {
            this.salario += valor;
        }
    }
}
