using System;

namespace roboDeAtendimento
{
    class Program 
    { 
        static void Main(string[] args)
        {
            int opcao;

            Console.WriteLine("digite a opcao desejada: ");
            Console.WriteLine("1-desbloqueio de cartao");
            Console.WriteLine("2-bloqueio de cartao");
            Console.WriteLine("3-falar com atendimento");
            Console.WriteLine("4-sair");
            opcao = int.Parse(Console.ReadLine());

           switch(opcao)
            {
                case 1:
                    {
                        Console.WriteLine("cartao desbloqueado com sucesso");
                        break;
                    }
                case 2:
                    {
                        Console.WriteLine("cartao bloqueado");
                        break;
                    }
                case 3:
                    {
                        Console.WriteLine("ola como posso ajudar");
                        break;
                    }
                case 4:
                    {
                        Console.Clear();
                        Console.WriteLine("saindo...");
                        break;
                    }
                default:
                    {
                        //ele limpa todas as informacoes a cima que esta no console
                        Console.Clear();
                        Console.WriteLine("opcao invalida");
                        break;
                    }
            }
        }
    }
}