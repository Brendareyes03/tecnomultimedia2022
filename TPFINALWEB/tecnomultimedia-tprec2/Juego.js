class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.obstaculos = [];
    this.tiempoInicio = millis();
    this.juegoTerminado = false;
    this.tiempoRestante = 12; 
    this.mostrarElementos = true; 
  this.tiempoContador = 0; 
}

  actualizar() {
    if (!this.juegoTerminado) {
      this.jugador.mover();
         image(imagenes[2], 0, 200, 100, 100);

      
      for (let i = this.obstaculos.length - 1; i >= 0; i--) {
        let o = this.obstaculos[i];
        o.mover();

        if (this.jugador.colision(o)) {
          this.juegoTerminado = true;
          imagenes[3] = loadImage("perdiste.png");
        }

        if (o.salirPantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }
      
if (millis() - this.tiempoInicio > 12000 && !this.juegoTerminado) {        
        this.juegoTerminado = true;
      }

      if (millis() - this.tiempoContador > 1000 && this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.tiempoContador = millis();
      }


      if (millis() - this.tiempoInicio < 12000) {
        if (frameCount % 30 === 0) {
          this.obstaculos.push(new Obstaculo());
        }
      } else {
        this.juegoTerminado = true;
           image(imagenes[4], 0,0,400,400);        
      }
    }
  }

  mostrar() {
    if (this.juegoTerminado) {
      image(imagenes[3], 0, 0, 400, 400);
    } else {
      this.jugador.mostrar();
      for (let o of this.obstaculos) {
        o.mostrar();
      }

     
      textSize(20);
      fill(0);
text("Tiempo restante: " + this.tiempoRestante, 20, 30);
    }
  }
}
