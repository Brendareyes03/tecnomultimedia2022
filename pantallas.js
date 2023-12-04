class Pantallas { // principal donde se dibuja juego botones etc
  constructor(i,t) { // no lo estamos usando
    this.boton = new Botones();
    this.pantallaActual=0; //
    this.juego = new Juego(this);
    this.texto= t;
   this.imagenes=i ;
  }


  dibujar() {
    if (this.pantallaActual == 0) {
      image(img[0], 0, 0);
      this.boton.dibujar( 500, 300);
      fill(255);
      textSize(40);
      fill(255);
      text("Presione el boton para iniciar", 255, 100);
    } else if (this.pantallaActual  == 1 ) {
      image(this.imagnes[i], 0, 0);
      text(textos[0], 10, 500, 600);// tiene que llamae
    } else if (this.pantallaActual  == 2 ) {
      image(img[2], 0, 0);
      this.boton.dibujar(img[16], 500, 300);

      text(textos[1], 10, 500, 600);
    } else if (this.pantallaActual == 3 ) {
      image(img[3], 0, 0);
      this.boton.dibujar(500, 300);

      text(textos[2], 5, 500, 600);
    } else if (this.pantallaActual == 4 ) {
      image(img[4], 0, 0);
      this.boton.dibujar(500, 300);

      text(textos[3], 10, 500, 600);
    } else if (this.pantallaActual == 5 ) {
      image(img[5], 0, 0);
      this.boton.dibujar( 500, 300);

      text(textos[4], 10, 500, 600);
    } else if (this.pantallaActual == 6 ) {
      image(img[6], 0, 0);

      this.boton.dibujar( 20, 305, this.estado);
      this.boton.dibujar(510, 305, this.estado);
      this.visual(20, 0, 490, 590, 70);
      text(textos[5], 10, 500, 600);
    } else if (this.pantallaActual == 7 ) {
      image(img[7], 0, 0);

      text(textos[6], 10, 500, 600);
      this.boton.dibujar( 500, 300);
    } else if (this.pantallaActual == 8 ) {
      image(img[11], 0, 0);

      text(textos[10], 5, 500, 600);
      this.boton.dibujar(500, 300);
    } else if (this.pantallaActual ==9 ) {
      image(img[8], 0, 0);

      text(textos[7], 5, 500, 600);
      this.boton.dibujar(500, 300);
    } else if (this.pantallaActual==10 ) {
      image(img[9], 0, 0);

      text(textos[8], 5, 510, 600);
      this.boton.dibujar(500, 300);
    } else if (this.pantallaActual ==11 ) {
      image(img[12], 0, 0);

      text(textos[11], 3, 500, 600);
      textSize(15);
      fill(0);
   
    } else if (this.pantallaActual  == 12) {
      background(200, 0, 250);
      this.juego.actualizar();
      this.juego.dibujar(img, textos);
      this.juego.teclado(img);
      this.juego.time();
    } else if (this.pantallaActual  == 14) {
      image(img[10], 0, 0);
      push();
      fill(0);
      textSize(40);
      text (textos[17], 270, 470);

      text(textos[9], 5, 495, 600);
      pop();
      textSize(15);
      fill(0);
      text (textos[16], 150, 590);
    } else if (this.estado == 15) {
      image(img[15], 0, 0);

      fill(0);
      textSize(40);
      text (textos[17], 270, 470);
    }
  }
  botonPresionado() {
    if (this.boton.inicio (530, 340, 20) && (this.pantallaActual==0)) {
      this.bInicio= true;
      this.pantallaActual = 1;
    } else if (this.pantallaActual==1) {
      
      this.pantallaActual= 2;
    } else if (this.pantallaActual ==2) {
     
      this.pantallaActual= 3;
    } else if (this.pantallaActual ==3) {
      
      this.pantallaActual= 4;
    } else if (this.pantallaActual ==4) {
   
      this.pantallaActual= 5;
    } else if (this.pantallaActual==5) {
     
      this.pantallaActual= 6;
    } else if (this.pantallaActual==6){
     
      this.pantallaActual=7;
    } else if (this.pantallaActual ==6) {
      
      this.pantallaActual=8;
    } else if (this.pantallaActual ==7) {
     
      this.pantallaActual= 9;
    } else if (this.pantallaActual ==9) {
      
      this.pantallaActual= 10;
    } else if (this.pantallaActual ==8) {
    
      this.pantallaActual= 11;
    } else if (this.pantallaActual ==10) {
     
      this.pantallaActual= 12;
    } 
  }

}
