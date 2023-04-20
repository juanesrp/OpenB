package OB;

public class Clases {
    
    public static void main(String[] args) {
        Carro carro = new Carro(3,150);
        System.out.println(carro.velocidadActual);
        carro.acelerar();
        System.out.println(carro.velocidadActual);
        System.out.println(carro.velocidadMaxima);
        
        Carro carro2= new Carro(5,250);
        System.out.println(carro2.velocidadActual);
        System.out.println(carro2.velocidadMaxima);
        //carro.desacelerar();
    }
}

class Carro {
    int numeroPuerta;
    int velocidadMaxima;
    float velocidadActual;

    public Carro(int numeroPuerta, int velocidadMaxima){
        this.numeroPuerta=numeroPuerta;
        this.velocidadMaxima=velocidadMaxima;
    }    
    public void acelerar() {
        velocidadActual += 15;
    }

    public void desacelerar() {
        
    }
}