package com.gabriel.Primeira_aplicacao_spring.Configuration;
// a classe de configuracao ela serve para definir bean e instacias de classe
//essa aqui e para eu poder usar classes e fazer a injeco de dependcia de metodos exeterno do spring
// tipo usar o _BancoContext no c# essa classe me permite configurar para poder usar
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HelloConfiguration {
    //@Bean Isso e para eu poder usar classes de bibliotecas de terceiros
    // faz o spring conseguir ver e entender bibliotecas de terceiros
//    public SDKAWS sdkaws() {
//        return  new SDKAWS();
//    }
}
