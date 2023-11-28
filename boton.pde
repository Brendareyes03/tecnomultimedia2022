class Boton {
  float x, y, diametro;
  
  Boton(float x, float y, float diametro) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
  }
  
  void mostrar() {
    if (dist(mouseX, mouseY, x, y) <= diametro / 2) {
      fill(200, 0, 0);
    } else {
      fill(200);
    }
    circle(x, y, diametro);
  }
  
  boolean fueClic() {
    return dist(mouseX, mouseY, x, y) <= diametro / 2;
  }
}
