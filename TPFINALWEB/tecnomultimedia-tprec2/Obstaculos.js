class Obstaculo {
  constructor() {
    this.x = width;
    this.y = random(height);
    this.ancho = random(30, 50);
    this.velocidad = random(1, 3);
  }

 mostrar() {
    image(imagenes[0], this.x, this.y, this.ancho, this.ancho);
 }
  mover() {
    this.x -= this.velocidad;
  }

  salirPantalla() {
    return this.x < 0;
  }
}
