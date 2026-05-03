package com.gabriel.Primeira_aplicacao_spring.Domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

// isso cria os metodos Getter, Setter e cria o contrutor
@Getter
@Setter
@AllArgsConstructor
public class User {
    private String Name;
    private String email;

}
