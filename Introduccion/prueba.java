package OB.Introduccion;

public class prueba {

    public static void main(String[] args) {
        suma(10, 30,20);
    }
    
    public static void suma(int a,int b,int c){
        int resultado= 0;
        resultado= a+b+c;
        System.out.println(resultado);
    }
}

class Coche {
    private int numPuertas;

    public Coche(int numPuertas) {
        this.numPuertas = numPuertas;
    }

    public int getNumPuertas() {
        return numPuertas;
    }

    public void setNumPuertas(int numPuertas) {
        this.numPuertas = numPuertas;
    }

    public void agregarPuerta() {
        this.numPuertas++;
    }
}

class Main {
    public static void main(String[] args) {
        Coche miCoche = new Coche(3);
        miCoche.agregarPuerta();
        System.out.println("Mi coche tiene " + miCoche.getNumPuertas() + " puertas.");
    }
}
