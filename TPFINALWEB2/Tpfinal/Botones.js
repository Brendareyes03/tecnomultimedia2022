class Botones {  //clase para los botones de la aventura grafica
  constructor(x,y,r) {
   this.x= x;
   this.y=y;
    this.radio = r;
    this.bInicio=true;
  }
  
  
  dibujar() {
    fill(0,0,255);
    circle(this.x, this.y, this.radio);
  }


  estoyDentroDelBoton (x, y, r) {
    return dist (mouseX, mouseY, x, y) <=r;
  }
}
