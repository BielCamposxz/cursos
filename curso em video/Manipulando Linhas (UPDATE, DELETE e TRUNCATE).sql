insert into cursos values
(default,'html', 'curso de html', '40', '37', '2014'),
(default, 'algoritimos', 'logica do programacao', '20', '15', '2014'),
(default, 'jarva', 'curso de java', '10', '5', '2014'),
(default, 'PGP', 'curso de php', '40', '30', '2014');

-- mudando para o portugues
-- atualize o curso
-- modificando o nome para "html5"
-- onde o "codigo" e igual a "1"
update cursos
-- isso troca o nome para "html5"
set nome = 'html5'
-- esse seleciona a coluna com codigo 1
-- aqui e sempre bom usar a chave primaria para indentificar
where codigo = '1';

update cursos
set nome = 'java'
where codigo = '5';

update cursos
set nome = 'php'
where codigo = '6';

update cursos
set descricao = 'curso full stack'
where codigo = '1';

update cursos
set descricao = 'curso de banco de dados'
where codigo = '2';

update cursos
set ano = '2020'
where idcurso= '6';

update cursos
set carga = '40'
where idcurso = '5';

update cursos
-- e possivel setar duas colunas de uma so vez basta separ por uma virgula
set nome = 'PHP', ano = '2015'
where idcurso = '6';

update cursos
set nome = 'java', carga = '40', ano = '2015'
where idcurso = '5'
-- esse limit faz que apenas uma linha seja afetada
limit 1;

insert into cursos values
(default,'gar', 'pommd', 'dom', 'dim', 'dd'),
(default, 'doiqd', 'ndndn', 'ncf', 'ono', 'on'),
(default, 'ijc9', 'uh', 'dij', 'idn', 'don');

-- deletar de cursos
-- e delete e apenas para deletar linhas nao e possivel usar em colunas, tabelas ou no database
delete from cursos
where idcurso = '7';

delete from cursos
where idcurso = '8';

delete from cursos
where idcurso = '9';

delete from cursos
where idcurso = '10'
limit 1;

-- esse "truncate" apaga todas as linhas da tabela
truncate table cursos;

describe cursos;

select * from cursos;