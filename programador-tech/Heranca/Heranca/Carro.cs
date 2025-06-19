using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Heranca
{
    // para a classe carro herdar de veiculos a classe veiculo tem que ser publica
    // esses dosi pontos fala que vou herdar de Veiculos
    public class Carro : Veiculos
    {
        // o base fala que queremos pegar o construtor da classe Veiculos
        // voce cria a contrutor da classe carro e coloca : base()
        // e tem que colocar todos os parametros do contrutor da classe veiculo na classe carro
        public Carro(int maxSpeed, string cor) : base(maxSpeed, cor)
        {
            
        }

        public void passarMarcha(int marcha)
        {
            this.
        }
    }
}
