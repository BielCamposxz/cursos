public class Main {
    // isso basicamente pega os metodos usam eles e salvam ai quando nao sao usados elas sao limpas
    // ai com isso voce so vai armazenar em memoria oque voce estiver usando apenas
    // e um mecanismo que indetifica valores sem referencia e limpa eles da memoria

    // instacias de objetos fica na memoria heap
    // valores de variaveis, atributos e etc ficam na stack
    // as variaveis primitivas vao se emplilhando na memoria e depois o GC limpa elas

    // diferentes GC do java
    // Serial GC usa 1 theread para fazer a limpeza, pausa a aplicacao durante a limpeza
    // problema: nao e recomendado para apps que exigem resposta rapida
    // deve ser usado em: CLI, aplicacoes leves, hardware com pouca memoria disponivel

    // parallel GC
    // usa varias threads, mais coisa sendo feita em menos tempo

    // G1 GC e um equilibrio do parallel e serial, readliza a limpeza em lugarem onde tem mais memoria sendo usada
    // Z GC ultra GC aplicacos que nao podem ter pausas aplicacoes criticas
    // Shenondoah
}
