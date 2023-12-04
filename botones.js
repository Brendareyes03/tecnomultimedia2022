//pasar de pantalla a pantalla presionando 

class Botones { 

  constructor() {
    this.x = 100;
    this.y = 100;
    this.radio = 60;
    this.bInicio=true;
  }
  dibujar() {


    fill(200);
    circle(this.x, this.y, this.radio);
  }


  estoyDentroDelBoton (x, y, r) {
    return dist (mouseX, mouseY, x, y) <=r;
  }
}
