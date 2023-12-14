
class Wendy { // clase de la victima del juego
  constructor() {
    this.posX = 5;
    this.posY = 50;
    this.tamX = 180;
    this.tamY = 180;
    this.img = loadImage("data/wendy.png");
    this.vida= 2;
  }

  dibujar() {
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
  }

 colisionaConBala(bala) {  // logica para que al dispararle a wendy colisione con la bala
    if ( bala.posX + bala.ancho >= this.posX && bala.posX <= this.posX + this.tamX && bala.posY + bala.alto >= this.posY && bala.posY <= this.posY + this.tamY) {
     this.velocidad=0;
     return true; 
    }
    return false;
  }
    recibirDaño(daño) {  // wendy recibe daño
    if (this.vida > 0) {
      this.vida -= daño;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }
  }
}
