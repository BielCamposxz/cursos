import javax.swing.text.Style;
import java.util.ArrayList;

public class Main {
   public void main() {
       ArrayList<String> nomes = new ArrayList<>();
       nomes.add("gabriel");
       nomes.add("Arthur");
       nomes.add("janux");

       // o size verifica o nome do array list
       for(int i = 0; i < nomes.size();i++) {
           System.out.println((nomes.get(i)));
           System.out.println((nomes.size()));

       }

       //uma forma mais simples de fazer isso e
       // primeiro o tipo e o nome da variavel que vai ser usada dentro do for e depois em qual array ou arrayList que ela vai iterar
       for(String nome : nomes) {
           System.out.println(nome);
       }

       int i = 0;
       while(i < 10) {

           System.out.println(i);
           i++;
       }
   }
}