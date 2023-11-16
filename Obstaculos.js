class Obstaculo {
  constructor() {
    this.x = width;
    this.y = random(height);
    this.ancho = random(30, 50);
    this.velocidad = random(1, 3);
  }

  mostrar() {
    image(imagenes[0], x, y, width, height);
  }

  mover() {
    this.x -= this.velocidad;
  }

  salirPantalla() {
    return this.x < 0;
  }
}
