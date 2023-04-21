package OB;

public class herencia {
    
    public static void main(String[] args) {
        CarroElectrico carroElectrico= new CarroElectrico();
        carroElectrico.velocidadMaxima=14;
        carroElectrico.matricula="XYX 345";

        System.out.println(carroElectrico.compruebaMatricula("XXX"));
    }
}

class Vehiculo {
    int velocidadMaxima;
    String matricula;

    public boolean compruebaMatricula(String matricula) {
        if(matricula.equals("XXX")) {
            return true;
        }
        return false;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public int getVelocidadMaxima() {
        return velocidadMaxima;
    }

    public void setVelocidadMaxima(int velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    }
}

class Carro extends Vehiculo {
    public Carro() {
        super(); // Llama al constructor vacío de la superclase Vehiculo
    }
}

class CarroElectrico extends Carro {
    private int capacidadBateria;

    public CarroElectrico(){
        super();
    }
    public void setCapacidadBateria(int capacidadBateria) {
        this.capacidadBateria = capacidadBateria;
    }

    public int getCapacidadBateria() {
        return capacidadBateria;
    }
}
