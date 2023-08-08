float cant; 
color c1, c2;
PImage imagen;

void setup() {
  size(800, 400);
  cant= 50; 
  c1 = color(0);
  c2=color(255);
  imagen=loadImage("imagen.png");
 
}

void draw() {
  background(255);
image (imagen,0,0,380,400);
textSize(15);
fill(0);
  text("presionar tecla 2 para cambiar color", 300,350);
  for (int i=0; i<cant; i++) { 

    float x = map(i, 0, 50, width/10, mouseX);
    float y = map(i, 0, 50, height/10, mouseY);
    float tam = map(i, 0, 200, 200, 0);
    pushMatrix();
    translate(x, y);
    if (i%2 == 0) { 
      fill(c1);
    } else {// 

      fill(c2);
    }
    rectMode(CENTER);
    rect(400, 0, tam, tam);

    popMatrix();

    if (keyPressed) {
      if (key == '2') {
        c2 = color(random (255), random (255), random(255));
      }
    }
    if (key == ' ') {
      recetear();
    }
  }
}

void recetear () {
  c1 = color (0);
  c2 = color (255);
}
