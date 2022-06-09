/*Brenda Reyes Tp2.       https://youtu.be/flabac6KLFA  */

float cant; 
color c1, c2;

void setup() {
  size(900, 600);
  cant= 50; 
  c1 = color(0);
  c2=color(255);
}

void draw() {
  background(255);

  for (int i=0; i<cant; i++) { 

    float x = map(i, 0, 50, width/10, mouseX);
    float y = map(i, 0, 50, height/10, mouseY);
    float tam = map(i, 0, 200, 400, 0);
    pushMatrix();
    translate(x, y);
    if (i%2 == 0) { 
      fill(c1);
    } else {// 

      fill(c2);
    }
    rectMode(CENTER);
    rect(width/10, 0, tam, tam);

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
