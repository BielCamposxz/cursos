using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Criando_Métodos
{
    public class Conta
    {
        // para criar um contrutor primeiro voce tem que colocar o modificador de acesso
        // e o construtor vai ser o nome da sua classe
        public Conta(int numero)
        {
            this.numero = numero;
        }

        // e possivel ter mais de um contrutor
        // para criar mais de um contrutor voce tem que colocar os paremetros dos outros contrutores e depois do contrutor novo
        public Conta(int numero, double limit)
        {
            this.numero = numero;
            this.limit = limit;
        }

        // o private nao deixa eu mudar o valor de forma explicita ex "saldo = 100"
        // o valor so pode ser muda apenas dentro da classe
        // eu posso deixar o so set privado colocando o private antes posso fazer a mesma coisa com o get
        // mas se eu quiser os dois e so colocar o private no comecao nao antes os set ou get
        private double saldo { get; set; }
        public double limit { get; private set; }
        public int numero { get; private set; }


        // primeiro voce coloca o modificador de acesso
        // o void e para falar que esse metodo nao vai retornar nada
        // e depois voce coloca o nome do metodo
        public void depositar(double valor)
        {
            if(valor < 0)
            {
                Console.WriteLine("esse valor nao pode ser depositado");
            }
            else
            {
                this.saldo += valor;
            }
        }

        public bool sacarDinheiro(double valor)
        {
            double saldoDisponivel = this.mostrarSaldo();

            if(valor >  saldoDisponivel)
            {
                Console.WriteLine("saque indisponivel");
                return false;
            }
            else
            {
                this.saldo -= valor;
                return true;
            }
        }

        // quando fala que vai retornar um valor e obrigatorio colocar o return
        public double mostrarSaldo()
        {
            return this.saldo + this.limit;
        }


        public void MudarLimit(double valor)
        {
            this.limit = valor;
        }
    }
}
