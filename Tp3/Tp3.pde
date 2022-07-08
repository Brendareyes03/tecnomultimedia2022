//TP3 "Aventura gráfica"
//Reyes, Brenda (91529/2)
//https://youtu.be/qk4-klsnWko


int Jugar=1;
int Repintar=1;
int Tam=35;
int Puntos = 0;
int PosX, PosY = 0;
int pantalla=0;
PImage[] fondoDePant = new PImage[2];


void setup(){
 size (800,600);
  for( int i = 0; i < fondoDePant.length ; i++){
    fondoDePant[i] = loadImage("fondo0" + i + ".png");
  }
}


void draw(){
 fill (255,255,0);
 textAlign(CENTER);
 textSize(18);
 text("HAZ CLICK SOLO EN EL CIRCULO ROJO" , 180,20);
 textSize(10);
 text("¿CUÁNTOS LOGRAS ENCONTRAR?" , 95,35);
  if ((Jugar==1) && (Repintar==1)){
   dibujarPantalla(fondoDePant[0]);
    DibujarFormas();
  }
}

void DibujarFormas(){
 for( int i=0; i<=Puntos; i++){
 fill((random(0,255)),(random(0,255)),(random(0,255)));
 ellipse((random(50,750)), (random(100,550)), Tam, Tam);
 }

 PosX= floor(random(50,750));
 PosY= floor(random(100,500));
 fill(255,0,0);
 ellipse(PosX, PosY, Tam, Tam);
 
 fill(255,0,0);
 textAlign(RIGHT);
 textSize(18);
 text("PUNTOS: " + (Puntos) , 750,30);
 
 Repintar=0;
}

void mouseClicked()
{
 if (Jugar==1)
 {
   if (Repintar ==0)
   {
     Repintar=1;
   }
   if ((mouseX > PosX-Tam) && (mouseX < PosX+Tam) && (mouseY  > PosY-Tam) && (mouseY < PosY+Tam))
   {
     Puntos+=1;
   }
   else 
   {
     Jugar=0;
    
   dibujarPantalla(fondoDePant[1]);
     fill (255,0,0);
     textAlign(CENTER);
     textSize(50);
     text("GAME OVER: " + Puntos , 400, 300);
     textSize(20);
     text("Volver a jugar apretando tecla G ", 400, 500);
    }
  }
}

void dibujarPantalla (PImage fondo){
 image (fondo,0,0, width ,height);
}

void keyPressed(){
  if (key == 'g'){
  Jugar=1;
Puntos = 0;

  }
}
