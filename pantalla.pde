class Pantalla {
  PImage imagen;
  String texto;
  
  Pantalla(PImage imagen, String texto) {
    this.imagen = imagen;
    this.texto = texto;
  }
  
  void mostrar() {
    image(imagen, 0, 0);
    dibujarTexto(20, 250, 500, 600, texto);
  }
}
