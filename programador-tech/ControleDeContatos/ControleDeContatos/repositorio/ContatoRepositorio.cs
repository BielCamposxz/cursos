using ControleDeContatos.Data;
using ControleDeContatos.Models;

namespace ControleDeContatos.repositorio
{
    public class ContatoRepositorio : IContatoRepositorio
    {

        private readonly BancoContext _bancoContext;

        public ContatoRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        // estou listando todo os dados do banco de dados
        public List<ContatoModel> BuscarTodos()
        {
            return _bancoContext.Contatos.ToList();
        }

        // o metodo de adicionar um valor no banco de dados
        public ContatoModel Adicionar(ContatoModel contato)
        {
            _bancoContext.Contatos.Add(contato);
            _bancoContext.SaveChanges();
            return contato;
        }
        
        public ContatoModel ListarPorId(int id)
        {
            // o FirstOrDefault busca o unico registro ou o primeiro que encontrar
            // vai buscar todos os id e vai pegar o que o id do contato seja igual o id do paremetro
            return _bancoContext.Contatos.FirstOrDefault(Contato => Contato.Id == id);
        }

        // metodo para atualizar os dados no banco
        public ContatoModel Alterar(ContatoModel contato)
        {
            // pega o contato que eu cliquei para alterar
            ContatoModel contatoDB = ListarPorId(contato.Id);

            if (contatoDB == null) throw new Exception("ouve um erro na atualizacao do contato");

            // pego cada valor e atribuo o valor que vou pegar no parametro
            contatoDB.Nome = contato.Nome;
            contatoDB.Email = contato.Email;
            contatoDB.Celular = contato.Celular;

            // atualizo os dados no banco
            _bancoContext.Contatos.Update(contatoDB);
            // salvo os dados no banoco
            _bancoContext.SaveChanges();
            // retorno as dados alterados
            return contatoDB;
            
        }

        public bool Apagar(int id)
        {
            // pega o contato pelo id 
            ContatoModel contatoDB = ListarPorId(id);

            if (contatoDB == null) throw new Exception("ouve um erro na delecao do contato");

            // remove os dados do banco
            _bancoContext.Contatos.Remove(contatoDB);
            // salva os dados do banco
            _bancoContext.SaveChanges();
            return true;
        }
    }
}
