using ControleDeContatos.Data;
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
// isso e para poder usar os metodos de ContatoRepositorio
builder.Services.AddScoped<IContatoRepositorio, ContatoRepositorio>();
var app = builder.Build();





// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

// o asp-controller: serve para setar qual a controler vou usar
// o asp-action: serve para setar a acao que vou usar
// para a criacao da tabela tenho que ir em ferramentas>gerenciador de pacotes nuGet>console gerenciador de pacotes e colocar esse comando "Add-Migration CriandoTabelaContatos -Context BancoContext"
// para a criacao da tabela e do banco tem que rodar o comando  Update-Database -Context BancoContext    no mesmo local que rodei o outro