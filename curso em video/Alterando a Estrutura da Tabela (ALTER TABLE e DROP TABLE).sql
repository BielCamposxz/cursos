-- isso serve para falar que vou alterar a minha tabelas
-- se eu quiser colocar um campo no final e so eu nn falar nada
-- se eu quiser colocar depois de um e so usar o "after"
-- se quiser colocar no comecao e so usar o "first"
-- o modify muda o tipo e as constranges
-- o change muda o nome, o tipo e as constranges
-- para apagar uma coluna e "alter table cursos drop column ano"
-- para apagar a tabela e "drop table cursos"
alter table pessoas
-- aqui fala que vou adicionar uma nova coluna nela
add column profissao varchar(10);

alter table pessoas
add column cpf int not null;

alter table pessoas
add column ensino_medio_completo enum('S', 'N') default 'n';

-- deletar uma columa
alter table pessoas
-- o drop serve para apagar colunas, tabelas, e os bancos de dados em si
drop column profissao;

alter table pessoas
--  isso adiciona a coluna "profissao" depois da coluna de nome
-- nao existe o before se eu quiser colocar um campo como o primeiro da tabelas eu tenho que
-- 'add column codigo int first'
add column profissao varchar(10) after nome;


alter table pessoas
add column codigo int first;

alter table pessoas
drop column codigo;

alter table pessoas
add column melhor_amigo varchar(20) after nome;

alter table pessoas
drop column ensino_medio_completo;

alter table pessoas
drop column cpf;

alter table pessoas
add column cpf int not null after id;

alter table pessoas
-- isso e para modificar o tipo de alguma coluna
modify column profissao varchar(20);

alter table pessoas
modify column nome varchar(20);

alter table pessoas
modify column nome varchar(10);

alter table pessoas
add column nome_completo varchar(30) not null after nome;

alter table pessoas 
drop column nome_completo;

alter table pessoas
add column nome_completo varchar(30) not null default '' after nome;

-- mudar o nome da coluna
alter table pessoas
-- aqui eu tenho que primero colocar o nome da coluna antiga e depois o nome da nova
-- tambem se eu mudar e quiser deixar as constranges eu tenhos que escrever tambem
-- se nao elas vao sair
change melhor_amigo amigos varchar(20);

alter table pessoas
change profissao prof varchar(20);

alter table pessoas
modify column prof varchar(30);

describe pessoas;

-- para mudar o nome da tabela
alter table pessoas
-- isso muda o nome da tabela para garfanhotos
rename to garfanhotos;

alter table garfanhotos
rename to pessoas;

-- isso cria uma tabela se nao existir uma tabelas chamada curso 
create table if not exists curso(
-- nao deixa colocar dois cursos com o mesmo nome
-- isso e diferente do "primary key"
-- o "primary key" e unique mas tem outras diferencas
	nome varchar(30) not null unique,
    descricao text,
    -- esse unsigned fala que nao pode ser um valor negativo o valor tem que ser positivo
    carga int unsigned,
    totaulas int unsigned,
    ano year default '2025'
)default charset = utf8;

alter table cursos
add column codigo int first;

alter table cursos
-- isso adiciona uma chave primaria
add primary key (codigo);

alter table curso
rename to cursos;

create table if not exists test (test int);

drop table test;

insert into cursos values
('1','onebitcode', 'muito bom', '100', '30', '2025'),
('2','curso em video', 'bom', '150', '40', '2020');

alter table cursos
add column preco int unsigned;

alter table cursos
add column assinates bigint unsigned;

alter table cursos
modify column assinates int unsigned;

alter table cursos
change assinates inscritos int unsigned;

alter table cursos
add column nascimento date after nome;

select * from pessoas;

select * from cursos;

describe cursos;
