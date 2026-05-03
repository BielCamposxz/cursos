-- isso serve para adicionar os valores nas colunas
insert into pessoas
(id ,nome, nascimento, sexo, peso, altura, nacionalidade)
-- esse e para definir os valores que vao ser colocados
values
-- e default retorna o valor padrao que seria o proximo id e o brasil que foi definido na criacao da tabela
(default, 'creusa', '1922-11-5', 'F', '50.9', '1.54', default);

-- se os valores colocados forem na mesma ordem que esta as colunas nao e preciso colocar os nomes das colunas
insert into pessoas values
-- voce pode inserir varios dados de uma so vez so separar por virgula pessoa
(default ,'felipe', '2008-10-22', 'F', '20.2', '1.22', 'africa'),
(default, 'gabriel', '2008-10-23', 'M', '55.4', '1.77', 'suica'),
(default, 'maria', '2008-11-8', 'F', '50.4', '1.64', default);

select * from pessoas;