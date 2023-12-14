// en esta clse pude lograr reiniciar el juego, problema que me habian remarcado en la entrega anterior

class Juego {
  constructor(pantallas){
    this.peter = new Peter();
    this.garfio = new Garfio();
    this.wendy = new Wendy();
    this.bala = new Bala(); 
    this.pantallas= pantallas;
  
  }

actualizar() {  //metodo de actualizar
  
    if (this.garfio.colisionaConBala(this.bala)) {
      this.pantallas.cambiarPantalla(9);
    }

    if (this.garfio.colisionaConWendy(this.wendy)) {
      this.pantallas.cambiarPantalla (8);
    }

    if (this.pantallas.pantallaActual !== 10 && this.pantallas.pantallaActual !== 8) {
      this.peter.moverDerecha();
      this.peter.moverIzquierda();
    }
    if(this.wendy.colisionaConBala(this.bala)){
    
    this.pantallas.cambiarPantalla (11);
    }
}

  dibujar(pantallas,img10) { // dibujar el juego, con los parametros necesarios 

    if (pantallas == 10) {
      background(0);
      image(img10, 0, 0, 800, 600);
      this.peter.dibujar();
      this.peter.haDisparadoBala();
      this.garfio.dibujar();
      this.garfio.mover();
      this.wendy.dibujar();
    }
  }


  teclaPresionada(keyCode) {  // teclas para controlar el juego
    this.peter.teclaPresionada(keyCode);
    this.peter.actualizar();
    this.peter.teclaLiberada();
  }

controlarDisparosAGarfio() {
    if (this.peter.haDisparadoBala()) {
      if (this.garfio.colisionaConBala(this.peter.bala)) {
       this.garfio.recibirDaño(1);
      }
      if (this.garfio.muerto()) {
       this.pantallas.cambiarPantalla(9); 
      }
    }
  }
   controlarDisparosAWendy  () {  //esto lo utilizo para controlar los disparos, si se hace la colision con la bala pasa  otra pantalla
    if (this.peter.haDisparadoBala()) {
      if (this.wendy.colisionaConBala(this.peter.bala)) {
       this.pantallas.cambiarPantalla(11); 
      }
    }
  }
  reiniciar(){            // reinicio
   this.peter = new Peter();
    this.garfio = new Garfio();
    this.wendy = new Wendy();
    this.bala = new Bala(); 
    this.pantallas= pantallas;
  
  }
}
