package OB.Introduccion;

public class ejercicio3 {
    
    public static void main(String[] args) {
        //Cuarto punto
        Persona persona= new Persona();
        
        persona.setEdad(25);
        persona.setNombre("Alfonso");
        persona.setTelefono("3504567890");

        //Quinto punto
        System.out.println(persona.getEdad());
        System.out.println(persona.getNombre());
        System.out.println(persona.getTelefono());

    }
}

//Primer y segundo punto
class Persona{
    private int edad;
    private String nombre;    
    private String telefono;

    //Tercer punto
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getTelefono() {
        return telefono;
    }
}