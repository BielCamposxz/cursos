package com.gabriel.Primeira_aplicacao_spring.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/") // esse request e da classe mas tem como colocar apenas no metodo
public class PaginaPrincipal {

    @GetMapping
    public String BemVindo() {
        return "Seja Bem Vindo";
    }

    @GetMapping("/you")
    public String Ola() {
        return "Ola gabriel";
    }

}
