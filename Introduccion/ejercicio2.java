package OB.Introduccion;

public class ejercicio2 {

    public static void main(String[] args) {
        
       System.out.println("Primer ejercicio IF: ");
       var numeroif= 5;
       
       if(numeroif == 0){
        System.out.println("Es igual a 0 \n");
       } else if(numeroif > 0){
            System.out.println("El valor es positivo \n");
       } else {
            System.out.println("El valor es negativo \n");
       }

       System.out.println("Segundo ejercicio While:");
       var numeroWhile= 0;
       
       while(numeroWhile < 3){
        numeroWhile+=1;
        System.out.println(numeroWhile);
       }

       System.out.println("\nTercer ejercicio Do While:");
       int numeroDoWhile=2;

       do{
        numeroDoWhile++;
        System.out.println(numeroDoWhile);
       } while(numeroDoWhile < 3);

       System.out.println("\nCuarto ejercicio For:");
       
       for(int numeroFor=0; numeroFor <= 3; numeroFor++){
        System.out.println(numeroFor);
       }

       System.out.println("\nQuinto ejercicio switch:");
       var estacion="VERANO";
        
        switch(estacion){
            case "VERANO":
                System.out.println("Es verano");
                break;
            case "INVIERNO":
                System.out.println("Es invierno");
                break;
            case "OTOÑO":
                System.out.println("Es Otoño");
                break;
            case "PRIMAVERA":
                System.out.println("Es Primavera");
                break;    
            default:
                System.out.println("Esto no es una estación");
        } 

    }
    
}
