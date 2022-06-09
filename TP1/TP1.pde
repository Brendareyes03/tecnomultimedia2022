PFont fuente;
PImage serpiente;

void setup() {
  size(400, 400);
  background(0);
  
  serpiente = loadImage("serpiente.png");
  
  fuente = loadFont ("monster.vlw");
  textFont(fuente);
}

void draw() {
  fill(255);
  text("Monster,INC",70,200);
  image(serpiente, 0,220, 200,140);
 
stroke (0,145,0); //color borde verde
strokeWeight (4); //grosor 4
fill (0,255,0); // relleno verde
rect (50,50,50,60);//rectángulo

stroke (200,200,0); //color borde amarillo
strokeWeight (4); //grosor 4
fill (255,255,0); // relleno amarillo
rect (50,280,30,20);//rectángulo
 
stroke (0,0,145); //color borde azul
strokeWeight (4); //grosor 4
fill (0,0,200); // relleno azul
rect (50,300,30,40);//rectángulo
  
stroke(240,127,0); //color naranja
strokeWeight (4);
fill (255,127,0);
rect (200,300, 30,40);
 
stroke(150,0,0); //color rojo
strokeWeight (4);
fill (255,0,0);
rect (300,320, 40,50);

stroke (200,200,0); //color borde amarillo
strokeWeight (4); //grosor 4
fill (255,255,0); // relleno amarillo
rect (300,220,50,60);//rectángulo

stroke (0,0,145); //color borde azul
strokeWeight (4); //grosor 4
fill (0,0,200); // relleno azul
rect (300,50,50,60);//rectángulo


stroke(150,0,0); //color rojo
strokeWeight (4);
fill (255,0,0);
rect (110,50, 30,40);


}
