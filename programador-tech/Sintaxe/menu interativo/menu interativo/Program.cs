using System;

namespace menuInterativo
{
    class Program
    {
        static void Main(string[] args)
        {
            string opcao;

            do
            {
            Console.WriteLine("escolha uma opcao \n 1.um \n 2.dois \n 3.tres \n 4.quatro \n 5.sair");
            opcao = Console.ReadLine();
                switch(opcao)
                {
                    case "1": {
                            Console.WriteLine("voce escolheu a opcao 1");
                            break;
                        }
                    case "2":
                        {
                            Console.WriteLine("voce escolheu a opcao 2");
                            break;
                        }
                    case "3":
                        {
                            Console.WriteLine("voce escolheu a opcao 3");
                            break;
                        }
                    case "4":
                        {
                            Console.WriteLine("voce escolheu a opcao 4");
                            break;
                        }
                    case "5":
                        {
                            Console.WriteLine("saindo...");
                            break;
                        }
                    default:
                        {
                            Console.WriteLine("opcao invalida");
                            break;
                        }
                }
            } while (opcao != "5");
        }
    }
}