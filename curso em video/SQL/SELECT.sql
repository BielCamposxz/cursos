use cadastro;

-- selecione todas as colunas da tabela cursos
select * from cursos;

select * from cursos
-- o "order  by" vai ordenar tudo a de acordo com a tabela nome na ordem alfabeta A-Z
order by nome;

select * from cursos
-- isso ordena tudo de ordem alfabetica inversa Z-A
order by nome desc;

select * from cursos
-- isso ordena tudo de ordem alfabetica tambem A-Z
order by nome asc;

select nome,carga,ano from cursos
-- vai ordenar as datas e se tiver datas iguais vao ordenar por ordem alfabetica
order by ano, nome;

select * from cursos
-- vai selecionar tudo onde o ano seja igual a 2016
-- eu posso usar os operadores relacionais para fazer outros filtros
where ano = '2016'
order by nome;

select * from cursos
where ano >= '2018'
order by ano;

select nome, descricao from cursos
where ano < '2014'
order by nome;

select nome, descricao from cursos
-- esse e o operador de diferente eu posso usar o "!=" ou "<>"
where ano <> '2014'
order by nome;



select nome, ano from cursos
-- isso pega todos as cursos que foi lancado entre "2014" e "2018"
where ano between '2014' and '2018'
order by nome;

select ano, nome from cursos
where ano between '2010' and '2016'
order by ano desc, nome asc;

select ano, nome from cursos
-- vai pegar todos os cursos de '2016', '2020', '2010'
where ano in ('2016', '2020', '2010')
order by ano desc, nome asc;

select ano, nome from cursos
where ano in ('2010', '2016')
order by ano;

-- no "in" eu posso escolher os valores
-- no "between" eu escolho faxa de valores

select nome, descricao, ano from cursos
where ano in ('2014', '2016')
order by ano;

select * from cursos
-- pega tudo de cursos onde a carga e maior que 35 e totalaulas seja menos que 30
-- esse seria igual o && so pega quando os dois e verdadeiro
where carga > 35 and totaulas < 30
order by nome;

select * from cursos
-- o "or" seria o mesmo que o || pelo menos um tem que dar verdadeiro 
where carga > 35 or totaulas < 30
order by nome;

select * from cursos
-- pega tudo que comeca com a letra "p"
-- aqui pega o nome que seja parecido com "p"
-- entao vai pegar tudo que comeca com "p"
-- o "%" fala vai vai ter mais letras apos o "p" ou nada ou seja pega se tiver apenas a letra "p" ou o "p" com mais coisa na frete
where nome like 'p%';

select * from cursos
where nome like 'c%';

select * from cursos
-- se colocar o "%" antes pega oque vem antes do "a"
-- pega tudo que termina com a letra "a"
where nome like '%a';

select * from cursos
-- pega tudo que tem a letra a independente se esta no comeco, meio ou fim
-- fala de vai ter qualquer coisa na frente, quaquer coisa a tras inclusive nada
where nome like '%a%';

select * from cursos
-- isso pega tudo de cursos onde o nome nao tenha letra "a"
where nome not like '%A%';

select * from cursos
-- pega tudo de cursos onde o nome nao comeca com "A"
where nome not like 'a%';

select * from cursos
-- pega tudo de nome que comece com "Ph" e termine com "p"
where nome like 'ph%p%';

select * from cursos
-- fala que vai pegar tudo de cursos onde comeca "ph" termina com "p" e tenha algo no final
where nome like 'ph$p_';

select * from gafanhotos
where nome like '%_silva%';

-- esse distinct tira tudo que for repitido se tiver 10 pessoas do brasil vai selecionar mostrar so 1
select distinct nacionalidade from gafanhotos;

-- conta tudo de cursos
-- total de linha
select count(*) from cursos;

-- isso conta quantas linhas tem a carga maior que 40
select count(*) from cursos
where carga > 40;

-- isso pega a maior carga
select max(carga) from cursos;

-- isso pega a menor carga
select min(carga) from cursos;

-- pega qual curso tem a maior carga entra '2014' e '2016'
select max(carga) from cursos
where ano between '2014' and '2016';

-- pega toda a linha com o menor numero de aulas
-- pega sempre o primeiro se tiver dois pega apenas o primeiro
select *, min(totaulas) from cursos 
where ano = '2016';

-- soma todas as aulas
select sum(totaulas) from cursos;

-- o avg tira a media dos valores
select avg(totaulas) from cursos;


-- exercicios
-- 1
select nome from gafanhotos
where sexo = 'f';

-- 2
select * from gafanhotos
where nascimento between '2000-1-1' and '2015-12-31';

-- 3
select nome, profissao from gafanhotos
where sexo = 'M' and profissao like 'programador%';

-- 4
select * from gafanhotos
where sexo = 'M' and nome like 'j%';

-- 5
select nome, nacionalidade from gafanhotos
where sexo = 'm' and
nome like '%_silva%' and
nacionalidade != 'brasil' and
peso < '100';

-- 6
select max(altura) from gafanhotos
where sexo = 'm' and nacionalidade = 'brasil';

-- 7
select avg(peso) from gafanhotos;

-- 8
select min(peso) from gafanhotos
where sexo = 'm' and
nacionalidade != 'brasil' and
nascimento between '1990-1-1' and '2000-12-31';

-- 9
select count(altura) from gafanhotos
where sexo = 'm' and altura > '1.90';

-- e bom colocar um "count" para mostrar a quantidade de valores iguais de cada grupo
select carga, count(*)from cursos
-- juntas todos os valores iguais em grupos
group by carga
order by carga asc;

select carga, count(*) from cursos
where totaulas = '30'
group by carga
-- isso fala que so vai mostras o que tiverem mais de "3" cursos com carga igual
having count(*) > 3;

select *, count(*)from cursos
group by ano;

select avg(carga) from cursos;

select carga, count(*) from cursos
where ano > '2015'
group by carga
having carga > (select avg(carga) from cursos);

-- exercicios
-- 1
select profissa, count(*) from gafanhotos
group by profissao;

-- 2
select sexo, count(*) from gafanhotos
where nascimento > '2005-1-1'
group by sexo;

-- 3
select nacionalidade, count(*) from gafanhotos
where nacionalidade != 'brasil'
group by nacionalidade
having count(*) > 3;

select avg(altura) from gafanhotos;

-- 4
select altura, count(*) from gafanhotos
where peso > '100' and
altura > (select avg(altura) from gafanhotos)
group by altura;