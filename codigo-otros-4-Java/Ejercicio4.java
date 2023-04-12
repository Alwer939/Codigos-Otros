package com.generation;

public class Codigo4 {

    //	Este programa trata de un juego de piedra papel o tijeras, preguntando al principio las selecciones de ambos jugadores
	
	public static void main(String[] args) {

    Scanner s = new Scanner(System.in); // Se agrego System.in
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
//	    				se repetia el jugador 1 en la impresion, se cambio al jugador 2
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
// 		Se tenia una segunda entrada innecesaria de Scanner
    String j2 = s.nextLine();
    
    if (j1.equals(j2)) { // Tenia un parentesis extra
//	    	Para que pudiera funcionar este if, se cambio a equals
      System.out.println("Empate");
    } 
    else {
      int g = 2;
      switch(j1) {
//	      Los casos del switch no tenian su break
//	      Y se cambiaron los if == por .equals para que funcionaran
        case "piedra":
          if (j2.equals("tijeras")) {
            g = 1;
          }
          break;

        case "papel":
          if (j2.equals("piedra")) {
            g = 1;
          }// faltaba cerrar las llaves del if
          break;
          
        case "tijeras": // A este le falta una s para que sea plural
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:	g = 2; // En default dejamos que gana el 2, puesto que los casos del case son para que el j1 gane
      }
      System.out.println("Gana el jugador " + g);
    }// cierre else
//	    Faltaba cerrar las entradas del Scanner
    s.close();
}// Cierre Main
}