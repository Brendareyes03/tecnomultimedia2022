class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.obstaculos = [];
    this.tiempoInicio = millis();
    this.juegoTerminado = false;
    this.tiempoRestante = 10; // Tiempo inicial en segundos
    this.tiempoContador = 0; // Variable para controlar la cuenta regresiva
  }

  actualizar() {
    if (!this.juegoTerminado) {
      this.jugador.mover();

      for (let i = this.obstaculos.length - 1; i >= 0; i--) {
        let o = this.obstaculos[i];
        o.mover();

        if (this.jugador.colision(o)) {
           image(imagenes[3],0, 0,400,400);
          this.juegoTerminado = true;
        }

        if (o.salirPantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }

      // Controla la generación de obstáculos
      if (millis() - this.tiempoInicio < 10000) {
        if (frameCount % 30 === 0) {
          this.obstaculos.push(new Obstaculo());
        }
      } else {
        this.juegoTerminado = true;
      }

      // Cuenta regresiva del tiempo restante
      if (millis() - this.tiempoContador > 1000 && this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.tiempoContador = millis();
      }
    } else {
      if (millis() - this.tiempoInicio > 12000) {
          image(imagenes[4],0, 0,400,400);
      }
    }
  }

  mostrar() {
    this.jugador.mostrar();
    for (let o of this.obstaculos) {
      o.mostrar();
    }

  
    textSize(20);
    fill(0);
    text(`Tiempo restante: ${this.tiempoRestante}`, 20, 30);
  }
}

