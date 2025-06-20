using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Polimorfismo
{
    // classes abistratas nao podem ser instanciadas
    // elas sao boas apenas para a criacao de subclasses/heranca
    // cria uma classe apenas de modelo
    public abstract class Funcionario
    {
        public string Nome { get; set; }

        public double Salario { get; set; }

        // so pode ter modotos abstratos dentro de classes abstratas
        //metodo abstrato ele nn pode conter nada dentro
        public abstract void receber();
    }
}
