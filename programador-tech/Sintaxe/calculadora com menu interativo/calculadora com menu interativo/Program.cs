using System;

namespace calculadoraComMenuInterativo
{
    class Program
    {
        static void Main(string[] args)
        {
            double numero1, numero2;
            string texto, opcao;
         
            texto = "escolha uma opcao: \n" +
                     "1.mais \n" +
                     "2.menos \n"+
                     "3.multiplicacao \n"+
                     "4.divisao \n"+
                     "5.sair \n";


            do
            {
                Console.WriteLine(texto);
                opcao = Console.ReadLine();

                switch (opcao) 
                {
                    case "1":
                        {
                            LerDoisNumeros(out numero1,out numero2);
                            Console.WriteLine($"{numero1} + {numero2} = {numero1 + numero2}");
                            break;
                        }
                    case "2":
                        {
                            LerDoisNumeros(out numero1, out numero2);
                            Console.WriteLine($"{numero1} - {numero2} = {numero1 - numero2}");
                            break;
                        }
                    case "3":
                        {
                            LerDoisNumeros(out numero1, out numero2);
                            Console.WriteLine($"{numero1} x {numero2} = {numero1 * numero2}");
                            break;
                        }
                    case "4":
                        {
                            LerDoisNumeros(out numero1, out numero2);
                            Console.WriteLine($"{numero1} / {numero2} = {numero1 / numero2}");
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

            static void LerDoisNumeros(out double n1, out double n2)
            {
                try
                {
                    //se eu usar so o write eu posso deixar o readline na mesma linha da pergunta
                    Console.Write("Digite o primeiro valor: ");
                    n1 = double.Parse(Console.ReadLine());

                    Console.Write("Digite o segundo valor: ");
                    n2 = double.Parse(Console.ReadLine());
                }
                catch (Exception erro)
                {
                    Console.WriteLine("Erro ao ler os números: " + erro.Message);
                    n1 = 0;
                    n2 = 0;
                }
            }
        }
    }
}