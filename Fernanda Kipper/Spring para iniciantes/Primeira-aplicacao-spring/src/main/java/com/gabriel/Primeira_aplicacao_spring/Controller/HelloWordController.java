package com.gabriel.Primeira_aplicacao_spring.Controller;
// na controler que vamos receber as requisicoes http

import com.gabriel.Primeira_aplicacao_spring.Domain.User;
import com.gabriel.Primeira_aplicacao_spring.Service.HelloWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.web.bind.annotation.*;

@RestController // essa anotacao indica que essa classe e uma controler e faz as configuracoes para ela receber requisicoes
@RequestMapping("/hello-word") // escuta todas as requisicoes que chegar no endpoint do hello-word
public class HelloWordController {


    // aqui eu nao preciso chamar o construtor e uma forma mais simples de fazer a injecao de dependencias
    @Autowired
    private HelloWordService hello;

    // isso e a injecao de dependencias igual no c# mvc
//    public HelloWordController(HelloWordService service) {
//        this.hello = service;
//    }

    // qual metodo http ele responde post, get, delet, put
    // metodo get ai esta respondendo "GET /hello-word"
    @GetMapping
    // @GetMapping("/get") poderia fazer isso a o endpoit seria "GET /hello-word/get"
    public String helloWord() {
        return hello.helloWord("Gabriel");
    }

    // isso fala que vai vir um parametro pela url
    @PostMapping("/{id}")
    // isso vai pegar a resposta do corpo da requisicao
    // no corpo e que vem o json para que eu vou usar
    @ResponseBody
    // isso fala que vai pegar o paremetro da url e vai passar para o parametro id
    // o RequestParam e para fazer filtos pela url quando tem ? ai ficaria https://localhost:8080/hello-word?filter=gabriel ai isso seria retornado gabriel para detro do filter
    // assim para o filter /api/produtos?filter=ativo
    public String helloWordPost(@PathVariable("id") String id, String numero, User body,  @RequestParam(value = "filter", defaultValue = "Nenhum") String filter) {
        return "Ola" + body.getName() + body.getEmail() + id;
    }
}
