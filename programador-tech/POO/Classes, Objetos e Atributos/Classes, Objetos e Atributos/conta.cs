using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes__Objetos_e_Atributos
{
    public class conta
    {
        // o public e para falar que o atributo e publico
        // depois eu declaro o tipo e o nome
        // o get e para fazer que o valor pode ser lido
        // o set e para falar que o valor pode ser modificiado
        public double Saldo { get; set; }
        public double Limit { get; set; }
        public int NumeroDaConta { get; set; }
    }
}
