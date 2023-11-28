class Juego {
  int pantallaActual = 0;
  Boton[] botones;
  Pantalla[] pantallas;
  
  Juego(int numPantallas, PImage[] imagenes, String[] textos) {
    pantallas = new Pantalla[numPantallas];
    botones = new Boton[numPantallas];
    
    for (int i = 0; i < numPantallas; i++) {
      pantallas[i] = new Pantalla(imagenes[i], textos[i]);
    }
    
    // Definir la posición de los botones según la pantalla
    botones[0] = new Boton(200, 550, 50); // Botón para pasar de la pantalla 0 a la 1
    botones[2] = new Boton(90, 550, 50); // Botón para elegir opción en la pantalla 3
    botones[3] = new Boton(490, 550, 50); // Otra opción en la pantalla 3
   botones[4] = new Boton(390,490,50);
   botones[5] = new Boton(220,490,50); 
   botones[6] = new Boton(150,350,50);
   botones[7] = new Boton(75,460,50); 
    
    
    // ... Define el resto de los botones
    
  }
  
  void dibujarTexto(float x, float y, float ancho, float alto, String texto) {
    textSize(20);
    textAlign(LEFT, CENTER);
    fill(255);
    text(texto, x, y, ancho, alto);
  }
  
  void mostrar() {
    if (pantallaActual >= 0 && pantallaActual < pantallas.length) {
      pantallas[pantallaActual].mostrar();
    }
    
    if (pantallaActual == 0 || pantallaActual == 1 || pantallaActual == 2) {
      botones[0].mostrar();
    } else if (pantallaActual == 3) {
      botones[1].mostrar();
      botones[2].mostrar();
    }
    // ... Mostrar el resto de los botones según la pantalla actual
  }
  
  void mousePressed() {
    if (pantallaActual == 0 && botones[0].fueClic()) {
      pantallaActual = 1;
    } else if (pantallaActual == 1 || pantallaActual == 2) {
      pantallaActual++;
    } else if (pantallaActual == 3 && botones[1].fueClic()) {
      pantallaActual = 4;
    } else if (pantallaActual == 3 && botones[2].fueClic()) {
      pantallaActual = 5;
    }
    // ... Lógica para cambiar de pantalla con los botones según la pantalla actual
  }
}
