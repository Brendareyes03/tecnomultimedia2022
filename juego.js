class Juego {
  constructor(Pantallas) {
    this.peter = new Peter();
    this.garfio = new Garfio();
    this.wendy = new Wendy();
    this.bala = new Bala();
   
    this.pantalla = "inicio"; // Estado inicial
    this.espera = millis() + 5 * 1000;
    this.inicio = loadImage("data/fondo.jpg");
    this.ganaste = loadImage("data/ganaste.jpg");
    this.perdiste = loadImage("data/perdiste.jpg");
  }

  actualizar() {
    if (this.garfio.colisionaConBala(this.bala)) {
      this.pantalla = "ganar";
    }

    if (this.garfio.colisionaConWendy(this.wendy)) {
      this.pantalla = "perder";
    }

    if (this.pantalla !== "inicio" && this.pantalla !== "perder") {
      this.peter.moverDerecha();
            this.peter.moverIzquierda();
      
    }
  }

  dibujar() {
  
    if (this.pantalla === "inicio") {
      background(0);
      if (millis() > this.espera) {
        image(this.inicio, 0, 0, width, height);
        this.peter.dibujar();      
        this.peter.haDisparadoBala();
        this.garfio.dibujar();
        this.garfio.mover();
        this.wendy.dibujar();
        
      } else {
        push();
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(20);
        text("Dispara a Garfio antes de que llegue a Wendy", width / 2, height / 2);
        let falta = this.espera - millis();
        text(round(falta / 1000), width / 2, height / 2 + 100);
        pop();
      }
    } else if (this.pantalla === "ganar") {
      image(this.ganaste, 0, 0, width, height);
      
      textSize(20);
      fill(255);
      text("¡Ganaste! \n Pudiste salvar a Wendy de las garras de Garfio", 150, 350);
      
    } else if (this.pantalla === "perder") {
      image(this.perdiste, 0, 0, width, height);
      
      textSize(20);
      fill(255);
      text("Oh no :( ¡Perdiste! \n Garfio se llevo a Wendy", 150, 400);
      
    }
  }
 keyPressed(){
 if (this.pantalla === "perder" || this.pantalla === "ganar") {
    
    if (key === 'n' || key === 'N') {
      
      this.pantalla = "inicio";
      this.espera = 0;
      
    }
  }
}
 
 

  teclaPresionada(keyCode) {
    this.peter.teclaPresionada(keyCode);
  }
  
  controlarDisparosAGarfio(){
   if(this.peter.haDisparadoBala()){
    if (this.garfio.colisionaConBala(this.peter.bala)){
              this.pantalla = "ganar";

     }
    }
  
  }

}wendy.posX &&
      this.posX <= wendy.posX + wendy.tamX &&
      this.posY + this.tamY >= wendy.posY &&
      this.posY <= wendy.posY + wendy.tamY
    ) {
      return true; // Garfio colisionó con Wendy
    }
    return false;
  }

  recibirDaño(daño) {
    if (this.vida > 0) {
      this.vida -= daño;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }
  }
}
