using ControleDeContatos.Data;
using ControleDeContatos.helper;
using ControleDeContatos.repositorio;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews();
// isso fala que vou usar o sql server e o context foi o que configuramos no BancoContext que seria a nossas tabela
builder.Services.AddEntityFrameworkSqlServer().AddDbContext<BancoContext>(o => o.UseSqlServer
// aqui estou pegando a string de conecao do arquivo "appsettings.json" com a chave "DataBase"
(builder.Configuration.GetConnectionString("DataBase")));
// isso aqui e para configuerar a injecao de dependecias com quando chamar a interface "IHttpContextAccessor" vai chamar a classe junto
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>(); 
// isso e para poder usar os metodos de ContatoRepositorio
builder.Services.AddScoped<IContatoRepositorio, ContatoRepositorio>();
builder.Services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
// isso aqui e para chamar a interface e a classe que cria, busca e remove a sessao do usuario
builder.Services.AddScoped<ISessao, Sessao>();

// essa e a contfiguracao os cookies na sessao
builder.Services.AddSession(o =>
{
    o.Cookie.HttpOnly = true;
    o.Cookie.IsEssential = true;
});
var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
// isso e para habilitar as secoes dentro do projeto
app.UseSession();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Login}/{action=Index}/{id?}");

app.Run();

// o asp-controller: serve para setar qual a controler vou usar
// o asp-action: serve para setar a acao que vou usar
// para a criacao da tabela tenho que ir em ferramentas>gerenciador de pacotes nuGet>console gerenciador de pacotes e colocar esse comando "Add-Migration CriandoTabelaContatos -Context BancoContext"
// para a criacao da tabela e do banco tem que rodar o comando  Update-Database -Context BancoContext    no mesmo local que rodei o outro