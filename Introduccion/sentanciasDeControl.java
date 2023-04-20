package OB.Introduccion;

public class sentanciasDeControl {

    public static void main(String[] args){
        //IF condicionales
        // String estacion= "primavera";

        // if(estacion == "primavera"){
        //     System.out.println("Es primavera");
        // } else if(estacion == "Invierno"){
        //     System.out.println("Es invierno");
        // } else System.out.println("No es ni primavera ni invierno");

        //WHILE
        //int contador=10;
        // while(contador>0){
        //     System.out.println("Contador Vale: " + contador);
        //     contador=contador-1;

        //DO WHILE
        // do{
        //     System.out.println("Contador Vale: " + contador);
        //     contador=contador-1;
        // }while(contador>0);

        //FOR
        // for(int i=0; i<contador; i++){
        //     System.out.println("Contador Vale: " + contador);
        //     contador-= 1;
        // }
        // int valores[]= {10,20,30,40,50};
        // for(int i = 0; i<valores.length; i++){
        //     System.out.println(valores[i]);
        // }
        
        //SWITCH
        // var estacion="VERANO";
        
        // switch(estacion){
        //     case "VERANO":
        //         System.out.println("Es verano");
        //         break;
        //     case "INVIERNO":
        //         System.out.println("Es invierno");
        //         break;
        //     default:
        //         System.out.println("No es ni verano ni invierno");
        // } 

        var hoy_es="DOMINGO";

        switch(hoy_es){
            case "LUNES":
                System.out.println("Laborable");
                break;
            case "MARTES":
                System.out.println("Laborables");
                break;
            case "MIERCOLES":
                System.out.println("Laborables");
                break;
            case "JUEVES":
                System.out.println("Laborables");
                break;
            case "VIERNES":
                System.out.println("Laborables");
                break;
            default:
            System.out.println("No laborable");

        }
    }
    
}
