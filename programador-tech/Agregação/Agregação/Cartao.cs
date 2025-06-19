using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agregação
{
    public class Cartao
    {
        public int Numero { get; set; }
        public string DataDeValidade { get; set; }

        // agregacao e quando um objeto se junta a outro
        // temos uma classe cartao e outra classe cliente
        // ai o cliente pega um cartao ai esse cartao esta associado a esse cliente

        // isso fala que dentro da classe cartao de credito temos uma referencia a classe cliente
        public Cliente Cliente { get; set; }

    }
}
