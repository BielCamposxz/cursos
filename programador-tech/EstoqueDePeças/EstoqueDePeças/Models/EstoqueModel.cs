namespace EstoqueDePeças.Models
{
    public class EstoqueModel
    {
        public int id { get; set; }
        public string Produto { get; set; }
        public int EmEstoque { get; set; } 
        public double Preco { get; set; }
    }
}
