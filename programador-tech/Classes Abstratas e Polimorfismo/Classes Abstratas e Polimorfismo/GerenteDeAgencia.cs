using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Polimorfismo
{
    // heredando de uma subclasse de Funcionario que e uma classe abstrata
    public class GerenteDeAgencia : Gerente
    {
        public override void receber()
        {
            this.Salario += 1200;
        }
    }
}
