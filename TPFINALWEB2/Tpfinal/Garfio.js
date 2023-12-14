
// pude lograr que la barra de vida funcione como corresponde, al disparar y la bala colisionar, el personaje se detiene de a poco
// y la barra va disminuyendo hasta q al quedar sin vida pasa a la pantalla de ganar

class Garfio {  //clase del villano del juego
constructor() {
    this.posX = 660;
    this.posY = 50;
    this.tamX = 170;
    this.tamY = 170;
    this.img = loadImage("data/garfio.png");
    this.vida = 100;
    this.velocidad = -1; 
    this.moverse=true;
    this.parar=0;
  }

  dibujar() {
   
      image(this.img, this.posX, this.posY, this.tamX, this.tamY);  // lo dibujo

      
      noFill();  // dibujo la barra de vida
      stroke(255);
      rect(this.posX, this.posY - 10, 30, 5);

      fill(0, 255, 0); // Color verde para la barra de vida
      let vidaActual = map(this.vida, 0, 100, 0, 30);
      rect(this.posX, this.posY - 10, vidaActual, 5);
    } 


    mover() {  // moviento del villano, solo se mueve para una direccion 
   
    if(this.moverse){
    this.posX += this.velocidad;
    }else{
      if(frameCount%60){
    this.parar++
      }
      if(this.parar%2){
        this.moverse=true;
      }
    }
  }

      colisionaConBala(bala) {
    if ( bala.posX + bala.ancho >= this.posX && bala.posX <= this.posX + this.tamX && bala.posY + bala.alto >= this.posY && bala.posY <= this.posY + this.tamY  ) {
     this.moverse=false;
     return true; 
    }
    return false;
  }
  
  colisionaConWendy(wendy) {
    if (this.posX + this.tamX >= wendy.posX && this.posX <= wendy.posX + wendy.tamX && this.posY + this.tamY >= wendy.posY && this.posY <= wendy.posY + wendy.tamY ) {
      return true;
    }
    return false;
  }

muerto(){   //garfio ya no tiene vidas
  return this.vida<=0;
  }
  
  
  recibirDaño(daño) {
    if (this.vida > 0) {
      this.vida -= daño;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }
  }
}
