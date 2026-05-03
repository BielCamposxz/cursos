# modelo relacional

# o DER(Diagrama entidade relacionamento) vai mostrar o diagramas de relacionamento do banco(quais entidades vao se relacionar)

# cadinalidade
# n:n isso significa que varios usuario ve varios cursos
# n = usuario
# n = cursos
# cada usuario pode ver varios cursos e cada curso pode ser visto por varias pessoas
# relacionamento muitos-para-muitos ou n:n

# 1:1 isso significa que 1 marido se casa com 1 esposa
# 1 = marido
# 1 = esposa
# relacionamento um-para-um

# 1:n varios dependententes para 1 funcionario
# n = dependentes
# 1 = funcinario
# eu posso ter varios dependentes por funciario mas cada dependente e observado por 1 funcionario
# relacionamento um-para-muitos

# chave estrangeira
# a chave estrangera e a chave primaria e uma outra entidade
#exemplo
# tenho duas entidades e cada entidade tem sua chave primaria "x" e "Y" ai eu quero relacionar x com y eu jogo a chave primaria x para o y mas so pode ter 1 chave primaria por entidade ai a chave x vira uma chave estrangeria de y
# a chave estrangeira era uma chave primaria de alguem ela so foi de um lugar para o outro  


# regras
# quanto vc joga um chave para outra entidade ela nn precisa ter o mesmo nome que tem como chave estrangeira

# 1:1  
# tenhos duas entidades marido e esposa na entidade marido eu tenho um chave primaria cpf-marido
# na entidade esposa eu tenho a chave primaria cpf-esposa
# ai eu relaciono as duas pegando a chave cpf-espora e jogando para a entidade marido e com isso a chave cpf-esposa vira uma chave estrangeira de marido

# 1:n 
# tenhos duas entidades funcionario(1) e dependetes(n)
# nesse relacionamento eu pego a chave do 1 e jogo para os muitos
# pego a chave cpf dos funcionarios e jogo para os dependentes e com isso dependentes tem uma chave estrageira
# sempre pegue a chave primaria do lado 1 jogue para os muitos

# n:n 
# nesse eu tenho que criar outra entidade e nesse entidade eu jogo as chaves estrangeiras de casa entidade na nova
# exemplo
# eu tenho cliente com a chave primaria cpf e produto com a chave primaria cod-produto
# ai com isso eu crio um nova entidade compra com id-compra como chave primaria 
# e dps eu pego a chave primaria cpf e jogo na entidade compra como chave estangeira
# e com o produto faco a mesma coisa
# pego a chave primaria cod-produto e jogo na entidade compra como chave estangeira




