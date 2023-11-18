class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.obstaculos = [];
    //variables para controlar tiempo
    this.tiempoInicio = millis();
    this.tiempoContador = 0;
    this.tiempoRestante = 12; // Tiempo restante en segundos
    //estado de juego
    this.juegoTerminado = false;
    this.mostrarElementos = true; // Controla si se muestran los elementos del juego
  }

  actualizar() {
    if (!this.juegoTerminado) { //si no termino el juego
      this.jugador.mover(); //mueve al jugador 
      image(imagenes[2], 0, 200, 100, 100);

      for (let i = this.obstaculos.length - 1; i >= 0; i--) { //mueve al obstaculo
        let o = this.obstaculos[i];
        o.mover();
        //verifica colisiones
        if (this.jugador.colision(o)) {// si hay colisioj juego terminado
          this.juegoTerminado = true;
          imagenes[3] = loadImage("perdiste.png");
        }

        if (o.salirPantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }

      if (millis() - this.tiempoInicio > 12000 && !this.juegoTerminado) {        // Si el tiempo límite se alcanza se termina el juego
        this.juegoTerminado = true;
      }

      if (millis() - this.tiempoContador > 1000 && this.tiempoRestante > 0) { //tiempo restante es mayor a cero y paso un 1 segundo
        this.tiempoRestante--;
        this.tiempoContador = millis();
      }


      // Controla la generación de obstáculos
      if (millis() - this.tiempoInicio < 12000) { // hace obstaculos mientras el tiempo sea meno a 12
        if (frameCount % 30 === 0) {
          this.obstaculos.push(new Obstaculo());
        }
      } else {
        this.juegoTerminado = true; //si pasa el tiempo establecido termina juego es verdad
        image(imagenes[4], 0, 0, 400, 400);
      }
    }
  }

  //muestra jugador, obstaculos
  mostrar() {
    if (this.juegoTerminado) {// tiempo terminado muestra imagen
      image(imagenes[3], 0, 0, 400, 400);
    } else {
      this.jugador.mostrar();// sino muestra jugador y osbtaculo
      for (let o of this.obstaculos) {
        o.mostrar();
      }

      // Muestra el tiempo restante en la esquina superior izquierda
      textSize(20);
      fill(0);
    text(`Tiempo restante:
      $ {
        this.tiempoRestante
      }
      `, 20, 30);
    }
  }
}
