package com.gabriel.Primeira_aplicacao_spring.Service;
// as classes de service que vai ter a logica por tras de tudo
// na controler apenas recebe a requisicao
// aqui eu faco as modificoes e logicas que eu quiser
// e tipo os "repositorios" do c#

import org.springframework.stereotype.Service;

@Service // indica que e uma classe de service
public class HelloWordService {
    public String helloWord(String nome) {
        return "Ola" + nome;
    }
}
