package OB.Introduccion;

public class herencia {
    
    public static void main(String[] args) {
        Carro carro= new Carro();
        carro.setSonido("Prrrrrr");
        System.out.println(carro.getSonido());
        
    }
}

class Vehiculo{
    int velocidadMaxima;
    String matricula;
    String sonido;

    public Vehiculo(){
        System.out.println("Estoy en el constructor de vehiculo");
    }

    public String getSonido() {
        return sonido;
    }

    public void setSonido(String sonido) {
        this.sonido = sonido;
    }
}

class Carro extends Vehiculo{
    
    public Carro(){
        System.out.println("Fuck YOU");
    }
}
