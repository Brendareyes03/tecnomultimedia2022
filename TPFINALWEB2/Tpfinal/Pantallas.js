class Pantallas { // clase madre de todo, aca esta la aventura grafica conectada con los botones y se llama a las instacias del juego con la logica necesaria para que aparezca cuando se la llame

  constructor() { 
    this.boton1 = new Botones(150, 500, 60);
    this.boton2= new Botones (550, 500, 60);
    this.pantallaActual= 0; //estado
    this.imgInicio= loadImage("data/img0.jpg");
    this.img1= loadImage("data/img1.jpg");
    this.img2= loadImage("data/img2.jpg");
    this.img3= loadImage("data/img3.jpg");
    this.img4= loadImage("data/img4.jpg");
    this.img5= loadImage("data/img5.jpg");
    this.img6= loadImage("data/img6.jpg");
    this.img7= loadImage("data/img7.jpg");
    this.imgFinal1= loadImage("data/img8.jpg");
    this.imgFinal2= loadImage("data/img9.jpg");
    this.img10= loadImage("data/img10.jpg");
    this.img11=loadImage("data/img11.jpg");



    this.juego= new Juego(this);
  }


  dibujar() {  // dibujar pantallas, logica de estados y se carga el juego usando manejar jueego

   
    if (this.pantallaActual == 0) {
      image(this.imgInicio, 0, 0);
      this.boton1.dibujar(150, 500, 60);
      fill(255);
      textSize(20);
      text("Presione el boton para iniciar", 200, 510);
    } else if (this.pantallaActual  == 1 ) {
      image(this.img1, 0, 0);
      fill (0);
      rect(40,500,550);
      
      fill(255);
      textSize(20);
      text("Peter llega a la casa de los Darling, en busca de algo", 50, 550);
      
    } else if (this.pantallaActual  == 2 ) {
      image(this.img2, 0, 0);
      this.boton1.dibujar(150, 500, 60);
      this.boton2.dibujar(550, 500, 60);
       fill (0);
      rect(40,555,550);
      fill(255);
      textSize(20);
      text("Conoce a los niños y el les propone vivir una gran aventura", 50, 575);
     
      
    } else if (this.pantallaActual == 3 ) {
      image(this.img3, 0, 0);
      this.boton1.dibujar(150, 500, 60);
      fill (0);
      rect(150,540,550);
      fill(255);
      textSize(20);
      text("los niños les comunican a sus padres del extraño intruso y  \n ellos llaman a la policia", 160, 560);
      
    } else if (this.pantallaActual == 4 ) {
      image(this.img4, 0, 0);
      fill (0);
      rect(40,555,550);
      fill(255);
      textSize(20);
      text("Peter y los niños se dirigen volando a Nunca Jamas", 120, 580);
       
    } else if (this.pantallaActual == 5 ) {
      image(this.img5, 0, 0);
      fill (0);
      rect(40,555,550);
      fill(255);
      textSize(20);
      text("Conocen a los niños perdidos", 120, 580);
      
   
    } else if (this.pantallaActual == 6 ) {
      image(this.img6, 0, 0);
      fill (0);
      rect(40,555,550);
      fill(255);
      textSize(20);
      text("Tambien conocen al capitan Garfio, enemigo de Peter", 110, 580);
    
      
    } else if (this.pantallaActual == 7 ) {
      image(this.img7, 0, 0);
      fill (0);
      rect(40,555,550);
      fill(255);
      textSize(17);
      text("Garfio secuestra a Wendy y ocurre un enfrentamiento entre Peter, \n toca el boton para ayudar a Peter a salvar a Wendy disparando a Garfio", 40, 575);
      this.boton1.dibujar( 150, 500, 60);
      
    } else if (this.pantallaActual == 8 ) {
      image(this.imgFinal1, 0, 0);
      fill (0);
      rect(195, 470 ,410, 80);
      fill(255);
      textSize(20);
      text("Oh no, Garfio a llegado a Wendy, y \n secuestro a  los demas niños", 200, 500);
      this.boton1.dibujar(150, 500, 60);
      
    } else if (this.pantallaActual ==9 ) {
      image(this.imgFinal2, 0, 0);
      fill (0);
      rect(195, 450 ,410, 90);
      fill(255);
      textSize(20);
      text("Peter salvo  a Wendy de Garfio, ¡Ganaste!", 200, 500);
      this.boton1.dibujar(150, 500, 60);
      
    } else if (this.pantallaActual == 10) {
      image(this.img10, 0, 0);
      this.manejarJuego();
    } else if (this. pantallaActual == 11) {
      image(this.img11, 0, 0);
      this.boton1.dibujar(150, 500, 60);
      fill (0);
      rect(195, 470 ,410, 80);
      fill(255);
      textSize(18);
      text(" Oh no! Le disparaste a Wendy sin querer y \n se unio al equipo de Garfio", 195, 495);
      
    }
  }



  botonPresionado() {  //logica de botones y pantallas con mouse 
    if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual==0)) {
      this.bInicio= true;
      this.pantallaActual = 1;
    } else if (this.pantallaActual==1) {
      this.pantallaActual= 2;
    } else if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual ==2)) {
      this.bInicio= true;
      this.pantallaActual = 3;
    } else if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual ==3)) {
      this.bInicio= true;
      this.pantallaActual = 0;
    } else if (this.boton2.estoyDentroDelBoton (550, 500, 60) && (this.pantallaActual ==2)) {
      this.bInicio= true;
      this.pantallaActual = 4;
    } else if (this.pantallaActual ==4) {

      this.pantallaActual= 5;
    } else if (this.pantallaActual==5) {

      this.pantallaActual= 6;
    } else if (this.pantallaActual==6) {

      this.pantallaActual=7;
    } else if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual ==7)) {
      this.bInicio= true;
      this.pantallaActual = 10;
    } else if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual ==8)) {
      this.bInicio= true;
      this.pantallaActual = 0;
      this.juego.reiniciar();
    } else if (this.boton1.estoyDentroDelBoton (150, 500, 60) && (this.pantallaActual ==9)) {
      this.bInicio= true;
      this.pantallaActual = 0;
      this.juego.reiniciar();
    } else if (this.boton1.estoyDentroDelBoton (150, 550, 60) && (this.pantallaActual==11)) {
      this.bInicio = true;
      this.pantallaActual= 0;
      this.juego.reiniciar();
    }
  }

  cambiarPantalla(n) { // es necesario para cambiar las pantallas en el juego
    this.pantallaActual = n;
  }

  manejarJuego() {  // cargo el juego
    this.juego.actualizar();
    this.juego.dibujar(this.pantallaActual, this.img10);
    this.juego.controlarDisparosAGarfio();
    this.juego.controlarDisparosAWendy();
  }

  reinicioConTecla() { // metodo para reinicar el juego con la tecla enter
    if (keyCode=== ENTER ) {
      if (this.pantallaActual=== 8) {
        this.pantallaActual = 0;
        this.juego.reiniciar();
      } else if (this.pantallaActual=== 9) {
        this.pantallaActual= 0;
        this.juego.reiniciar();
      } else if (this.pantallaActual === 11) {
        this.pantallaActual= 0;
        this.juego.reiniciar();
      }
    }
     this.juego.teclaPresionada(keyCode);
  }
 
}
