using System;

namespace Heranca
{
    class Program
    {
        static void Main(string[] args)
        {
            Carro carro = new Carro(100, "black");
            // herdou da classe veiculo
            carro.desacelerar(100);
            
            // metodos e atributos estaticos tambem funcionam na heranca
            Carro.Acelerar(100);
            
        }
    }
}
