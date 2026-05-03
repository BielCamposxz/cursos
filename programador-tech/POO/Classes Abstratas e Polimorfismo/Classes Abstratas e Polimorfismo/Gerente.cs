using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes_Abstratas_e_Polimorfismo
{
    public class Gerente : Funcionario
    {

        // poliformismo
        // para fazer pegar um metodo de uma classe e mudar ele
        // primeiro voce coloca o modificador de acesso
        // depois voce escreve override esse override fala que estou mudando algum metodo/ sobrepor o metodo
        // depois voce coloca o retorno
        // e no final o nome exato do metodo que vou mudar
        public override void receber()
        {
            this.Salario += 1000;
        }
    }
}
