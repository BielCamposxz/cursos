using System;

namespace estruturaDeRepeticao
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome = "gabriel";
            string[] pessoas = new string[10];
            pessoas[0] = "gabriel";
            pessoas[1] = "gabrie";
            pessoas[2] = "gabri";
            pessoas[3] = "gabr";
            pessoas[4] = "gab";
            pessoas[5] = "ga";
            pessoas[6] = "g";
            pessoas[7] = "";
            pessoas[8] = "g";
            pessoas[9] = "ga";
            int i = 0;

            //while
            while (i < pessoas.Length)
            {
                Console.WriteLine(pessoas[i]);
                i++;
            }

            //do while
            do
            {
                Console.WriteLine("isso tem que se repetir 1 vez");
            } while (i == 0);

            //foreach
            foreach (var item in nome)
            {
                Console.WriteLine(item);
            }

            //for
            string[] amigos = new string[2];
            amigos[0] = "ri ri";
            amigos[1] = "carol";
            for (int y = 0; y < amigos.Length; y++)
            {
                Console.WriteLine(amigos[y]);
            }
        }
    }
}