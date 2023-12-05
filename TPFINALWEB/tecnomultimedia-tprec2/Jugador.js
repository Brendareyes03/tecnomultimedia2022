class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.ancho = 40;
    this.velocidad = 5;
  }

  mostrar() {
    image(imagenes[1], this.x, this.y, this.ancho, this.ancho);
  }

  moverArriba() {
    this.y -= this.velocidad;
    this.y = constrain(this.y, 0, height - this.ancho / 2);
  }

  moverAbajo() {
    this.y += this.velocidad;
    this.y = constrain(this.y, 0, height - this.ancho / 2);
  }

  mover() {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        this.moverArriba();
      } else if (keyCode === DOWN_ARROW) {
        this.moverAbajo();
      }
    }
  }

  colision(o) {
    let distancia = dist(this.x, this.y, o.x, o.y);
    return distancia < (this.ancho + o.ancho) / 4;
  }
}
