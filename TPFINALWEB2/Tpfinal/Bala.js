class Bala{  //clase para la bala
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.alto = 5;
    this.ancho = 5;
    
    this.disparada = false;
  }
  
  dibujar(){   //dibujo la bala si esta disparada
    if(this.disparada){
      fill(0);
      ellipse(this.posX, this.posY,this.alto ,this.ancho);
      this.mover();  //y le pido q se mueva 
    }
  }
  
  mover(){  //movimiento de la bala
    this.posY-=5 ;
  }
  
  disparar(){   // dispara la bala
    this.disparada = true;
  }
  
}
