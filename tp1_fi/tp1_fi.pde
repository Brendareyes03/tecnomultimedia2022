float movimiento=900;
float movimiento2 = 900;
float movimiento3 =900;
float movimiento4 =900;
float movimiento5 =900;
PImage boo  ;
PImage mike;
PImage rendall;
PImage roz;
PImage sullivan;

float trans=0 ;
PFont Sletra ;
float movletra=200;



void setup () {
  size (600, 600);
  boo = loadImage ("boo.png");
  mike= loadImage ("mike.png");
  rendall = loadImage ("rendall.png");
  Sletra = loadFont ("monster.vlw");
  roz = loadImage  ("roz.png");
  sullivan = loadImage ("sullivan.png");
}


void draw () {

  background(10);
  textFont (Sletra);
  fill(255,255,0);
  textSize(70);
  text ("Moster.INC", 100, movletra );
 
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
rect (50,500,50,40);//rectángulo
  
stroke(240,127,0); //color naranja
strokeWeight (4);
fill (255,127,0);
rect (100,300, 30,40);
 
stroke(150,0,0); //color rojo
strokeWeight (4);
fill (255,0,0);
rect (500, 320, 40,60);

stroke (200,200,0); //color borde amarillo
strokeWeight (4); //grosor 4
fill (255,255,0); // relleno amarillo
rect (530,220,50,60);//rectángulo

stroke (0,0,145); //color borde azul
strokeWeight (4); //grosor 4
fill (0,0,200); // relleno azul
rect (500,50,50,60);//rectángulo

stroke (200,200,0); //color borde amarillo
strokeWeight (4); //grosor 4
fill (255,255,0); // relleno amarillo
rect (300,500,70,50);//rectángulo

stroke (0,145,0); //color borde verde
strokeWeight (4); //grosor 4
fill (0,255,0); // relleno verde
rect (500,500,50,60);//rectángulo

stroke(150,0,0); //color rojo
strokeWeight (4);
fill (255,0,0);
rect (110,50, 30,40);
 
 if (movletra < 199 ) {
  movletra=movletra-2;
  }


  if (movimiento <(900)) {
    movimiento=movimiento-3;

    image (boo,200, movimiento, 400,450);
    fill(255,255,0 );
    text ("BOO",250,movimiento+500);
  }

  if ( movimiento <0 ) {

    image (mike, 200, movimiento2, 400,500);
    movimiento2= movimiento2-3;
     fill(0,255,255 );
    text ("MIKE",80,movimiento2+500);
  }
  if ( movimiento2 <0 ) {
    image (rendall, 150, movimiento3, 400,500);
    movimiento3 = movimiento3-3;
     fill(255,0,255 );
    text ("RENDALL",50,movimiento3+500);
  }
  
 if (movimiento3<0){
 image (roz,50,movimiento4,540,450);
 movimiento4=movimiento4-3;
  fill(0,255,0 );
    text ("ROZ",250,movimiento4+500);
 }
if (movimiento4<0){
image(sullivan,100,movimiento5, 400,450);
movimiento5=movimiento5-3;
 fill(255,255,0 );
    text ("SULLIVAN",100,movimiento5+500);
}
fill(0,10);
rect(0,0,600,600);
float r1= random (0,600);

if (movimiento5<-400 ){
  fill(#cbd200, trans);
text ("FIN", r1 ,r1,r1,r1);}
}

void mousePressed() {
  movimiento = movimiento-2;
  movletra= movletra-2;
  
}
