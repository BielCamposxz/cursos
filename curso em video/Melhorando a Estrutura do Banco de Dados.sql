-- issp apaga um banco de dados
drop database cadrastro;

-- constrains sao parametros ou regras no sql 
create database cadrastro
-- isso e para permitir inserir caracteres em utf-8 
Default character set utf8
default collate utf8_general_ci;

use cadrastro;

create table pessoas (
-- esse increment e para ir aumentando 1 para cada pessoa que cadrastra
id int not null auto_increment,
-- isso deixa obrigatorio prencher esse campo
nome varchar(30) not null,
nascimento date,
-- isso fala que dentro de sexo so pode ter algun desses valores 
sexo enum('M', 'F'),
-- esse numeros sao para falar quantas casas tem antes e depois da virgula ex 10000,00
-- ai ficaria 3 antes da virgula e 2 depois e primeiro numero e o total e o segundo a quantas casas depois da virgula
peso decimal(5,2),
altura decimal(3,2),
-- isso e outra constrain isso fala que se ninguem colocar nada vai comecar em brasil
nacionalidade varchar(20) default 'brasil',
-- isso define id como uma chava primaria
primary key (id)
) default charset = utf8;