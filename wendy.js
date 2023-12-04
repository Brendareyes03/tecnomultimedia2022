class Wendy {
  constructor() {
    this.posX = 5;
    this.posY = 50;
    this.tamX = 150;
    this.tamY = 150;
    this.img = loadImage("data/wendy.png");
  }

  dibujar() {
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
  }
}
