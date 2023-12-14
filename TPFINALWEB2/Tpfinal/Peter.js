class Peter {  // clase para el personaje principal del juego
  constructor(posX, posY) {
    this.posX = 300;
    this.posY = 500;
    this.tamX = 200;
    this.tamY = 200;
    this.bala = new Bala();
    this.img = loadImage("data/peter.png");
    this.img1 = loadImage("data/peter1.png");
    this.img2 = loadImage("data/peter2.png");
    this.frames = [this.img, this.img1, this.img2];
    this.frameIndex = 0;
    this.moverIzquierda = false;
    this.moverDerecha = false;
  }

  dibujar() {
    this.bala.dibujar();
    push();
    imageMode(CENTER);
    image(this.frames[this.frameIndex], this.posX, this.posY, this.tamX, this.tamY);
    pop();
  }

  teclaPresionada() { // movimiento del personaje con sprites implementados
    if (keyCode == ENTER) {
      this.dispararBala();
    } else if (keyCode == LEFT_ARROW) {
      this.moverIzquierda = true;
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha = true;
    }
  }

  teclaLiberada() { // si dejo de presionar esas teclas, vuelve a su estado original
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda = false;
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha = false;
    }
  }


  actualizar() {  // utilizo este metodo actualizar para cargar algunos sprites. En la correcion pedian que los personajes no esten tan quietos
    if (this.moverIzquierda) {
      this.posX -= 50;
      this.frameIndex = 1; 
    } else if (this.moverDerecha) {
      this.posX += 50;
      this.frameIndex = 2;
    } else {
      this.frameIndex = 0; 
    }
  }

  dispararBala() {   // el personaje dispara la bala
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }

  haDisparadoBala() { // devuelve la bala disparada
    return this.bala.disparada;
  }
}

