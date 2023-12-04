class Bala{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.alto = 5;
    this.ancho = 5;
    
    this.disparada = false;
  }
  
  dibujar(){
    if(this.disparada){
      fill(0);
      ellipse(this.posX, this.posY,this.alto ,this.ancho);
      this.mover();
    }
  }
  
  mover(){
    this.posY-=5 ;
  }
  
  disparar(){
    this.disparada = true;
  }
  
}
