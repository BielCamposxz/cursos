using AspNetCoreGeneratedDocument;
using OperacaoVerao.Models;
using OperacaoVerao.Data;

namespace OperacaoVerao.Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly BancoContext _bancoContext;

        public UsuarioRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        public UsuarioModel BuscarPorLogin(string login)
        {
            return _bancoContext.Usuarios.FirstOrDefault(usuario => usuario.Login.ToUpper() == login.ToLower());
        }


        public UsuarioModel Adicionar(UsuarioModel usuario)
        {
            // pega a data da hora que isso for chamado
            usuario.DataDeCadrastro = DateTime.Now;
            _bancoContext.Usuarios.Add(usuario);
            _bancoContext.SaveChanges();
            return usuario;
        }

        public List<UsuarioModel> BuscarTodos()
        {
            return _bancoContext.Usuarios.ToList();
        }

        public UsuarioModel ListarPorId(int id)
        {
            return _bancoContext.Usuarios.FirstOrDefault(usuario => usuario.Id == id);
        }

        public UsuarioModel Alterar(UsuarioModel usuario)
        {
            UsuarioModel usuarioDb = ListarPorId(usuario.Id);

            usuarioDb.Nome = usuario.Nome;
            usuarioDb.Email = usuario.Email;
            usuarioDb.Login = usuario.Login;
            usuarioDb.Perfil = usuario.Perfil;
            usuarioDb.DataDeAtualizacao = DateTime.Now;

            _bancoContext.Usuarios.Update(usuarioDb);
            _bancoContext.SaveChanges();
            return usuarioDb;
        }

        public bool Apagar(int id)
        {
            UsuarioModel usuario = ListarPorId(id);
            _bancoContext.Usuarios.Remove(usuario);
            _bancoContext.SaveChanges();
            return true;
        }

    }
}
