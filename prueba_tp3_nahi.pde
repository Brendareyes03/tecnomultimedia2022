Juego juego;
int pantallaActual = 0;
int c = 18;  

String [] texto= new String [14]; 
PImage[] imagen =  new PImage[c];

void setup() {
  size(600, 600);
  
  for (int i = 0; i < texto.length; i++) {
  texto[i] = loadStrings("texto" + i + ".txt")[0];
}
 
  //carga masiva = ciclo for
  for( int i = 0 ; i < c ; i++ ){
    imagen[i] = loadImage( "imagen_" + i + ".jpg" );  
  }
  
  
  // Carga de imágenes y textos...
  
  // Inicialización del juego
  juego = new Juego(c, imagen, texto);
}

void draw() {
  background(255);
  juego.mostrar();
}

void dibujarTexto(float x, float y, float ancho, float alto, String texto) {
  textSize(20);
  textAlign(LEFT, CENTER);
  fill(255);
  text(texto, x, y, ancho, alto);
}

void mousePressed() {
  juego.mousePressed();
}
