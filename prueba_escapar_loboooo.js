let puntos = 0;
let jugador;
let obstaculos;
let tiempoInicio;
let juegoTerminado = false;
let imgObstaculo; 

function preload() {
  imgObstaculo = loadImage('arbol.jpg');
}

function setup() {
  createCanvas(400, 400);
  jugador = new Jugador();
  obstaculo = new Obstaculo();
  tiempoInicio = millis();
}

function draw() {
  background(255);
  
  if (!juegoTerminado) {
    jugador.mostrar();
    jugador.mover();
    
    obstaculo.mostrar();
    obstaculo.mover();
    
    if (jugador.colision(obstaculo)) {
      fill(255, 0, 0);
      textSize(32);
      text("¡Perdiste!", 200, 200);
      juegoTerminado = true;
    }
    
    if (obstaculo.salirPantalla()) {
      obstaculo = new Obstaculo();
      puntos++;
    }
    
    textSize(20);
    fill(0);
    text("Puntos: " + puntos, 20, 30);
    
    if (millis() - tiempoInicio < 10000) {
      if (frameCount % 60 === 0) {
        obstaculo = new Obstaculo();
      }
    } else {
     juegoTerminado = true;
    }
  } else {
    if (millis() - tiempoInicio > 12000) {
      textSize(32);
      fill(0, 255, 0);
      text("¡Ganaste!", width/2 - 80, height/2);
    }
  }
}


function keyPressed() {
  if (!juegoTerminado) {
    if (keyCode === UP_ARROW) {
      jugador.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      jugador.moverAbajo();
    } else if (keyCode === LEFT_ARROW) {
      jugador.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      jugador.moverDerecha();
    }
  }
}

class Jugador {
  constructor() {
    this.x = 10;
    this.y = 200;
    this.diametro = 20;
    this.velocidad = 5;
  }

  mostrar() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.diametro, this.diametro);
  }

  moverArriba() {
    this.y -= this.velocidad;
    this.y = constrain(this.y, 0, height - this.diametro / 2);
  }

  moverAbajo() {
    this.y += this.velocidad;
    this.y = constrain(this.y, 0, height - this.diametro / 2);
  }

  moverIzquierda() {
    this.x -= this.velocidad;
    this.x = constrain(this.x, 0, width - this.diametro / 2);
  }

  moverDerecha() {
    this.x += this.velocidad;
    this.x = constrain(this.x, 0, width - this.diametro / 2);
  }

  mover() {
  
  }

  colision(o) {
    let distancia = dist(this.x, this.y, o.x, o.y);
    return distancia < (this.diametro + o.ancho) / 2;
  }
}

class Obstaculo {
  constructor() {
    this.x = width;
    this.y = random(height);
    this.ancho = random(50, 70);
    this.velocidad = random(1, 3);
    this.movimientoVertical = false; 
  }

  mostrar() {
    image(imgObstaculo, this.x, this.y, this.ancho, this.ancho);
  }

  mover() {
    if (!this.movimientoVertical) {
      this.x -= this.velocidad; 
    }
  }

salirPantalla() {
    return this.x + this.ancho < 0;
  }
}
