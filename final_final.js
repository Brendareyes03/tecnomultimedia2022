let img = []; 
let objPantallas; 
let texto = [];
let objJuego;


function setup() {
  createCanvas(800, 600);
  objPantallas = new Pantallas(img, texto);// no lo estoy usando , lio con olos parametros
  objJuego = new Juego(); // crear en clase pantalla
}


function draw() {
  objPantallas.dibujar(img, texto);
}
function mousePressed() {
  objPantallas.botonPresionado();
}
function keyPressed() {
   objPantallas.pasaje();
}
function preload() {
  for (let i = 0; i < 18; i++) {
    img [i] = loadImage('data/img'+ i +'.png');
    for (let x = 0; x < 14; x++) {
      texto = loadStrings('data/texto.txt');
    }
  }
}
