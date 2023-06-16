//< MANOR >MAYOR
PImage referencia;

void setup(){
referencia =loadImage ("referencia.jpg");
size (800,400);
background(255);


}
void draw(){
cuadradoBase();
image(referencia, 400,0,400,400);
}

void cuadradoBase() {
rect(0,0,400,400);
fill(254,255,3);
for(int y=0; y <height; y=y+20){
//rect(0,0,400,400);
//fill(254,255,3);
stroke(0);
strokeWeight(10);
 line(0,y,width,y);
 }
}
