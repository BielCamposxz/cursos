using Criando_Métodos;
using System;
using static System.Net.Mime.MediaTypeNames;

namespace Agregação
{
    class Program
    {
        static void Main(string[] args) { 
       

            Cliente cliente = new Cliente();
            cliente.Nome = "gariel";

            Cartao cartao = new Cartao();
            cartao.Numero = 12345678;
            cartao.DataDeValidade = "09/2025";
            // estou agregando a atributo cliente a instacia cliente
            cartao.Cliente = cliente;
            // na agregacao a classe que recebeu a agregacao ou seja o cartao herdou os atributos da classe cliente
            Console.WriteLine(cartao.Cliente.Nome);

        }
    }
}
