package com.gabriel.Primeira_aplicacao_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Profile;

// isso e uma anotacao ai estou decorando essa classe com essa anotacao
@SpringBootApplication
// aqui eu estou trocando o properties que vai ser usado
@Profile("Dev")
public class PrimeiraAplicacaoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrimeiraAplicacaoSpringApplication.class, args);
	}

}
