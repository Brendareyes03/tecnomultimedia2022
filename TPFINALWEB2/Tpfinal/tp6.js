 
let objPantallas;
let objJuego;

function setup() {
  createCanvas(800, 600);
  objJuego = new Juego(objPantallas);
  objPantallas = new Pantallas(objJuego);
}

function draw() {
  objPantallas.dibujar();
}

function mousePressed() {
  objPantallas.botonPresionado();
}
function keyPressed(){

objPantallas.reinicioConTecla();


}
