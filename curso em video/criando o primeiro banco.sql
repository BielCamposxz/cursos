/*para criar um banco de dados voce tem que escrever "CREATE DATABASE (nome do banco);"*/
/*para criar uma tabela voce tem que escrever "CREATE TABLE (nome da tabela) ();"*/
-- isso e para ativar a tabelapessoas
create table pessoas (
/* depois de colocar cada coluna voce tem que declarar os tipos*/
-- os principais tipos sao: numericos, data/tempo, literais e espaciais mas cada um se sub divide

-- numeros
-- inteiro se dividem em tinyInt, SmallInt, Int, MediumInt, BigInt isso e o tamanho de bites que isso vai ocupar na memoria
-- por exemplo e tinyInt sao para valores pequenos como idades e o BigInt para valores maiores
-- real se dividem em Decimal, Float, Double, Real
-- logico o logico se dividem em bit, Boolean

-- data/tempo eles se dividem em Date, DateTime, Timestamp, Time, Year

-- literais
-- caractere eles se dividem em char e varchar isso define a quantidade de caracteres
-- char:  se for char ele vai ter a quantidade que coloquei mas se o nome for so com duas vai guardar as letras e o que faltou vai ser espaco
-- varchar: se for varchar e eu colocar um tamanho de 30 mas so usar 2 vai quardar 2 diferente do char que iria guardar as duas letras e os outros 28 seria espaco em branco
-- texto: o texto se divide em TinyText, Text, MediumText, LongText
-- a diferenca entre texto e caractere e que texto e para textos grandes e caractere sao para coisas menores como nomes, enderecoes e etc
-- binario os tipos sao TinyBlob, blob, mediumBlob, LongBlob
-- esse e para guardar coisas em binario por exemplo uma imagem
-- colecao: enum, set

-- espaciais
-- geometry, point, polygon, multipolygon e outros
-- ta falando que vai ver ate 30 caracteres
nome varchar(30),
idade tinyint(3),
-- vai guardar uma letra apenas
sexo char(1),
peso float,
altura float,
nacionalidade varchar(20)
);
-- o ponto e virgula indica o fim do comando

-- para mostras a tabela
describe pessoas;