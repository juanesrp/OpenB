package OB.Introduccion;

public class metodos {
    
    public static void main(String[] args) {
        Moto moto= new Moto();
        EjecutaAcelerar(moto);      
    }

    public static void EjecutaAcelerar(Vehiculo vehiculo) {
        vehiculo.Acelerar(20);
    }
}

interface Vehiculo{
    void Acelerar(int cuantaVelocidad);
    void Frenar(int cuantaVelocidad);
}

class Carro implements Vehiculo{
    
   public void Acelerar(int cuantaVelocidad){
    System.out.println("Carro()->Acelerar");
   }
   public void Frenar(int cuantaVelocidad){
    System.out.println("Carro()->Frenar");
   }
}

class Moto implements Vehiculo{
    
    public void Acelerar(int cuantaVelocidad){
     System.out.println("Moto()->Acelerar");
    }
    public void Frenar(int cuantaVelocidad){
     System.out.println("Moto()->Frenar");
    }
 }