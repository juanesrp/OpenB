package OB.Introduccion;

public class ejercicio4 {
    
    public static void main(String[] args) {
        Cliente cliente= new Cliente();
        cliente.setEdad(25);
        cliente.setNombre("Juan Esteban Rendón");
        cliente.setTelefono("3145679812");
        cliente.setCredito(3500000);

        System.out.println(cliente.getNombre() + " tiene " + cliente.getEdad() + " años, su telefono es " + cliente.getTelefono() + " y tiene un credito de: " + cliente.getCredito());

        Trabajador trabajador= new Trabajador();
        trabajador.setEdad(35);
        trabajador.setNombre("Liliana");
        trabajador.setTelefono("3145677685");
        trabajador.setSalario(1980000);

        System.out.println("El trabajador " + trabajador.getNombre() + " tiene " + trabajador.getEdad() + " años, su telefono es " + trabajador.getTelefono() + " y tiene un salario de: " + trabajador.getSalario());
    }
}

class Persona{
    int edad;
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    String nombre;
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    String telefono;
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}

class Cliente extends Persona{
    int credito;

    public int getCredito() {
        return credito;
    }

    public void setCredito(int credito) {
        this.credito = credito;
    }
}

class Trabajador extends Persona{
    int salario;

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

}