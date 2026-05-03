using System;

namespace conversorDeMedidas
{
    class Program
    {
        static void Main(string[] args)
        {
            string opcao;
            int metro;

            do
            {

                pegandoDados(out metro, out opcao);

                switch (opcao)
                {
                    case "1":
                        {
                            Console.WriteLine($"{metro} em milimetros sao {metro * 1000}");
                            break;
                        }
                    case "2":
                        {
                            Console.WriteLine($"{metro} em centimetros sao {metro * 100}");
                            break;
                        }
                    case "3":
                        {
                            Console.WriteLine($"{metro} em decimetros sao {metro * 10}");
                            break;
                        }
                    case "4":
                        {
                            Console.WriteLine($"{metro} em decametros sao {metro / 10}");
                            break;
                        }
                    case "5":
                        {
                            Console.WriteLine($"{metro} em hectometros sao {metro / 100}");
                            break;
                        }
                    case "6":
                        {
                            Console.WriteLine($"{metro} em hectometros sao {metro / 1000}");
                            break;
                        }
                    case "7":
                        {
                            Console.Clear();
                            Console.WriteLine("saindo...");
                            break;
                        }
                }
            } while (opcao != "7");

            static void pegandoDados(out int metros, out string opcao)
            {
                Console.Write("digite um valor em metros: ");
                metros = int.Parse(Console.ReadLine());
                Console.WriteLine("escolha uma unidade: \n 1.milimetros \n 2.centimetros \n 3.decimetros \n 4.decametro \n 5.hectometro \n 6.quilometro \n 7.sair");
                opcao = Console.ReadLine();
            }
        }
    }
}
