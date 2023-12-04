class Peter{
  constructor(posX, posY){
      this.posX = 300;
    this.posY = 550;
    this.tamX = 200;
    this.tamY = 200;
    this.miColor = color(255,0,0);
    this.vida = 1;
    this.bala = new Bala();
     this.img = loadImage("data/peter.png");
  }
  
  dibujar(){
      this.bala.dibujar();

    push();
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
    pop()
  }
  
  teclaPresionada(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moverIzquierda();
    }else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    }else if(keyCode == ENTER){
      this.dispararBala();
    }
  }
  
  moverDerecha(){
    this.posX += 10;
  }
  
  moverIzquierda(){
    this.posX -= 10;
  }
  

  
  dispararBala(){
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }
  
  haDisparadoBala(){
    return this.bala.disparada;
  }
}
