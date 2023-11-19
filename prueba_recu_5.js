let imagenes = [];
let juego; // Crea una variable para el objeto del juego.
let pantallaInicio = true; // Variable para controlar la pantalla de inicio
let tiempoInicioJuego; //Defina una variable para almacenar el tiempo de inicio del juego.

function preload() {
  imagenes[0] = loadImage("arbol.png");
  imagenes[1] = loadImage("cerditomenor.png");
  imagenes[2] = loadImage("lobo.png");
  imagenes[3] = loadImage("ganaste.png");
  imagenes[4] = loadImage("perdiste.png");
  imagenes[5] = loadImage("instrucciones.png");
}

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  tiempoInicioJuego = millis(); // Guara el tiempo actual en milisegundos
}

function draw() {
  background(255);
  //verifique si se está mostrando la pantalla de inicio o el juego, llamando a las funciones correspondientes.

  if (pantallaInicio) {
    mostrarPantallaInicio();
  } else {
    juego.actualizar();
    juego.mostrar();
  }
}

function mostrarPantallaInicio() {
  image(imagenes[5], 0, 0, 400, 400);
}

function keyPressed() {
  if (pantallaInicio) {
    pantallaInicio = false; // Cambiar a pantalla de juego
    tiempoInicioJuego = millis(); // Reiniciar el tiempo para el juego
  } else {
    juego.keyPressed();
  }
}
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
class Jugador {
  constructor() { //propiedades del jugador
    this.x = width / 2;
    this.y = height / 2;
    this.ancho = 40;
    this.velocidad = 5;
  }

  mostrar() {
    image(imagenes[1], this.x, this.y, this.ancho, this.ancho);
  }
//movimiento del jugador
  moverArriba() {
    this.y -= this.velocidad;
    this.y = constrain(this.y, 0, height - this.ancho / 2);
  }

  moverAbajo() {
    this.y += this.velocidad;
    this.y = constrain(this.y, 0, height - this.ancho / 2);
  }

  mover() {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        this.moverArriba();
      } else if (keyCode === DOWN_ARROW) {
        this.moverAbajo();
      }
    }
  }

//verificasi hay colision del jugador con obstacilo
  colision(o) {
    let distancia = dist(this.x, this.y, o.x, o.y);
    return distancia < (this.ancho + o.ancho) / 4;
  }
}

class Obstaculo { //propiedades del obstaculo
  constructor() {
    this.x = width;
    this.y = random(height);
    this.ancho = random(30, 50);
    this.velocidad = random(1, 3);
  }

 mostrar() {
    image(imagenes[0], this.x, this.y, this.ancho, this.ancho);
 }
  mover() { //mov del obstaculo
    this.x -= this.velocidad;
  }
 //verifica si salio de la pantalla
  salirPantalla() {
    return this.x < 0;
  }
}
