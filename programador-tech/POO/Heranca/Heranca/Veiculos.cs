using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heranca
{
    public class Veiculos
    {

        public Veiculos(int maxSpeed, string cor)
        {
            Veiculos.Speed = 0;
            this.MaxSpeed = maxSpeed;
            this.Color = cor;
        }
        // public: tenho acesso de qualquer lugar
        // private: tenho acesso apenas na minha classe
        // protected: tenho acesso na classe e nas suas subclasses
        protected int MaxSpeed { get; set; }

        public static int Speed { get; set; }

        public string Color { get; set; }

        public static void Acelerar(int value)
        {
            Veiculos.Speed += value;
        }

        public void desacelerar(int value)
        {
            Veiculos.Speed -= value;
        }

    }
}
