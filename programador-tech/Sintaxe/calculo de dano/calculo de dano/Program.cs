using System;

namespace calculoDeDano
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.Write("insira o nome do personagem atacante: ");
                string personagemDeAtaque = Console.ReadLine();

                Console.Write($"insira o poder de ataque do personagem {personagemDeAtaque}: ");
                int poderDeAtaque = int.Parse(Console.ReadLine());

                Console.Write("digite o nome do personagem do defesa: ");
                string personagemDeDefesa = Console.ReadLine();

                Console.Write("digite a vida o personagem de defesa: ");
                int vidaDoPersonagemDeDefesa = int.Parse(Console.ReadLine());

                Console.Write("digite o pode de defesa de um personagem: ");
                int poderDeDefesa = int.Parse(Console.ReadLine());

                Console.Write("seu personagem possui escudo? (sim/nao) ");
                string possuiEscudo = Console.ReadLine();
                Boolean escudo;

                if (possuiEscudo == "sim")
                {
                    escudo = true;
                }
                else
                {
                    escudo = false;
                }


                if (poderDeAtaque > poderDeDefesa && escudo == false)
                {
                    vidaDoPersonagemDeDefesa -= poderDeAtaque - poderDeDefesa;
                    Console.Clear();
                    Console.WriteLine($"o personagem de ataque causou {poderDeAtaque - poderDeDefesa} de dano no personagem de defesa e ele ficou com {vidaDoPersonagemDeDefesa} de vida");

                }

                if (poderDeAtaque > poderDeDefesa && escudo == true)
                {
                    vidaDoPersonagemDeDefesa -= (poderDeAtaque - poderDeDefesa) / 2;
                    Console.Clear();
                    Console.WriteLine($"o personagem de ataque causou {(poderDeAtaque - poderDeDefesa) / 2} de dano no personagem de defesa e ele ficou com {vidaDoPersonagemDeDefesa} de vida");
                }

                if (poderDeAtaque < poderDeDefesa)
                {
                    Console.Clear();
                    Console.WriteLine("vode nao causou dano no personagem de defesa");
                }
            }
            catch (Exception erro)
            {
                Console.WriteLine(erro.Message);
            }
        }
    }
}