let Jugar = 1;
let Repintar = 1;
let Tam = 35;
let Puntos = 0;
let PosX, PosY = 0;
let pantalla = 0;
let fondo0, fondo1, fondoCreditos; // Agregamos fondoCreditos

function preload() {
  fondo0 = loadImage("fondo00.png");
  fondo1 = loadImage("fondo01.png");
  fondoIntro = loadImage("intro.png"); // Agregamos la imagen de los créditos
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (pantalla === 0) {
    image(fondoIntro, 0, 0,800,600); // Mostramos la imagen de los créditos

} else if (pantalla === 1) { // Si estamos en la pantalla de créditos
    if (Jugar === 1 && Repintar === 1) {
      image(fondo0, 0, 0,800,600);
      DibujarFormas();
    }
  } else if (pantalla ==2) {
    image(fondo1, 0, 0,800,600);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("  " + Puntos, 350, 430);
    
  }
}

function DibujarFormas() {
  for (let i = 0; i <= Puntos; i++) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(50, 750), random(100, 550), Tam, Tam);
  }

  PosX = floor(random(50, 750));
  PosY = floor(random(100, 500));
  fill(255, 0, 0);
  ellipse(PosX, PosY, Tam, Tam);

  fill(255, 0, 0);
  textAlign(RIGHT);
  textSize(18);
  text("PUNTOS: " + Puntos, 750, 30);

  Repintar = 0;
}

function mouseClicked() {
 if (Jugar === 1) {
    if (Repintar === 0) {
      Repintar = 1;
    }
    if (mouseX > PosX - Tam && mouseX < PosX + Tam && mouseY > PosY - Tam && mouseY < PosY + Tam) {
      Puntos += 1;
    } else {
      Jugar = 0;
     pantalla=2;
    }
  }
}

  function keyPressed() {
    if (pantalla==0 ||key === 'g') {

      pantalla = 1; // Volver al juego cuando se presiona la tecla 'g'
    }
    if (key === 'a') {
      Jugar = 1;
      Puntos = 0;
      pantalla = 0; // Volver al juego cuando se presiona la tecla 'g'
    }
  }
function mouseMoved() {
  cursor('grab');
}
