
class Obstaculo { //propiedades del obstaculo
  constructor() {
    this.x = width;
    this.y = random(height);
    this.ancho = random(30, 50);
    this.velocidad = random(1, 3);
  }

 mostrar() {
    image(imagenes[0], this.x, this.y, this.ancho, this.ancho);
 }
  mover() { //mov del obstaculo
    this.x -= this.velocidad;
  }
 //verifica si salio de la pantalla
  salirPantalla() {
    return this.x < 0;
  }
}
