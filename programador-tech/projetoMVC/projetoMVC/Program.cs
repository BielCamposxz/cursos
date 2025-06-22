var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

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
    // a controle vai ser a homeController
    // a action vai ser a pagina principal que vai abrir
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

// model: vai ser a parte de mapear o retorno de uma banco de dados ou enviar os dados para o banco
// view: vai ser toda a parte visual do site
// controlee: seria a api controla toda a aplicacao
// para usar o C# no html voce usa a plavra reservada "@" ex @foreach (var item in array) { }

