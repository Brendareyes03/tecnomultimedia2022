class Garfio {
  constructor() {
    this.posX = 660;
    this.posY = 50;
    this.tamX = 150;
    this.tamY = 150;
    this.img = loadImage("data/garfio.png");
    this.vida = 100;

    this.velocidad = 1; // Velocidad de movimiento
    this.direccion = -1; // 1 para mover a la derecha, -1 para mover a la izquierda
  }

  dibujar() {
    if (this.vida > 0) {
      // Dibuja a Garfio
      image(this.img, this.posX, this.posY, this.tamX, this.tamY);

      // Dibuja la barra de vida
      noFill();
      stroke(255);
      rect(this.posX, this.posY - 10, 30, 5);

      fill(0, 255, 0); // Color verde para la barra de vida
      let vidaActual = map(this.vida, 0, 100, 0, 30);
      rect(this.posX, this.posY - 10, vidaActual, 5);
    } 
  }

  mover() {
    // Mueve a Garfio
    this.posX += this.direccion * this.velocidad ;

   
  }

  colisionaConBala(bala) {
    if (
      bala.posX + bala.ancho >= this.posX &&
      bala.posX <= this.posX + this.tamX &&
      bala.posY + bala.alto >= this.posY &&
      bala.posY <= this.posY + this.tamY
    ) {
     this.velocidad=0;
     return true; // La bala colisionó con Garfio
    }
    return false;
  }

  colisionaConWendy(wendy) {
    if (
      this.posX + this.tamX >= wendy.posX &&
      this.posX <= wendy.posX + wendy.tamX &&
      this.posY + this.tamY >= wendy.posY &&
      this.posY <= wendy.posY + wendy.tamY
    ) {
      return true; // Garfio colisionó con Wendy
    }
    return false;
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
