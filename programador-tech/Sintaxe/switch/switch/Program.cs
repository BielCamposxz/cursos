using System;

namespace switchcase
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero;

            Console.WriteLine("digite um numero");
            numero = int.Parse(Console.ReadLine());

            switch(numero)
            {
                // se voce colocar um case em baixo do outro vc pode encadear eles e junta tudo para fazer uma coisa so
                case 1:
                case 2:
                case 3:
                    {
                        Console.WriteLine("o valor e de 1 a 3");
                        break;
                    }
                case 4:
                case 5:
                case 6:
                    {
                        Console.WriteLine("o valor e de 4 a 6");
                        break;
                    }
                default:
                    {
                        Console.WriteLine("o valor e maior que 6");
                        //tem que dar um breack no default tambem
                        break;
                    }
            }
        }
    }
}