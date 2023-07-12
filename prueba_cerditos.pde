PImage[] pantalla =  new PImage[20];
String[] texto = new String[20];
int estado;

void setup() {
  size( 600, 600 );
  estado = 0;

  //carga masiva de imagenes
  for ( int i = 0; i < 20; i++ ) {
    pantalla[i] = loadImage( "pantalla-" + i + ".png" );
  }

  texto[0] = "Había una vez tres hermanos cerditos que vivían en el bosque. Como el malvado lobo siempre los estaba persiguiendo para comérselos, decidieron armar sus casitas para estar a salvo.";
  texto[1] = "Como no se ponían de acuerdo qué material utilizarían, cada uno se puso a pensar en el material de su propia casa";
  texto[2] = "Cuando los tres acabaron sus casas se metieron cada uno en la suya y entonces apareció por ahí el malvado lobo.";
  texto[3] = "Se dirigió a la de paja y llamó a la puerta pero como el menor no le abría, el lobo empezó a soplar. Entonces la débil casa se vino abajo. El cerdito echó a correr y se refugió en la casa de su hermano mediano.";
  texto[4] = "El hermano mediano hizo su casa de madera, ya que era más rápido terminarla y no llevaba mucho esfuerzo. Pero cuando el lobo comenzó a soplar aun con más esfuerzos, la madera se derrumbo y los cerditos salieron corriendo para la casa de su hermano mayor.";
  texto[5] = "La casa del mayor era de cemento. Tuvo su trabajo duro y cansador pero cuando el lobo sopló y sopló con todas sus fuerzas la casa no se movía ni siquiera un poco. El lobo estaba cada vez más hambriento y enojado.";
  texto[6] = "Pero vio que había una chimenea así que comenzó a subirla para poder entrar.";
  texto[7] = "Los cerditos lo escucharon, y para darle su merecido pensaron en cómo hacerle una trampa:";
  texto[8] = "Tiraron muchos alfileres en la chimenea y cuando el lobo cayo no paraba de gritar del dolor por tenerlos clavados en sus patas. Salió gritando de la casa y no volvió a comer cerditos.";
  texto[9] = "Llenaron la chimenea de leña y pusieron al fuego un gran caldero con agua. Así cuando el lobo cayó por la chimenea el agua estaba hirviendo y se pegó tal quemazo que salió gritando de la casa y no volvió a comer cerditos.";
  texto[10] ="Buscaron papeles, paja, ramas y leña para encender la chimenea lo mas rápido posible. Cuando el lobo se tiro se pegó tal quemazo que salió gritando de la casa y no volvió a comer cerditos.";
  texto[11] ="Los 3 cerditos ahora están a salvo y tranquilos porque el lobo feroz aprendió la lección. ";
}

void draw () {
  if ( estado == 0 ) { //estados de pantalla 
    image(pantalla[0], 0, 0, 600, 600);
    fill(0);
    textSize(15);
    textAlign(CENTER);
    text( texto[0], 35, 20, 500, 600 );

    if ( dist(mouseX, mouseY, 300, 400)<=50 ) { //copie y pegue del profe que es de botones, ni idea
      fill( 200, 0, 0 );
    } else {
      fill( 200 );
    }
    circle( 300, 400, 100 );
  }
  if ( estado == 1 ) { //pantalla 2 con su texto
    image(pantalla[1], 0, 0, 600, 600);
    fill(0);
    textSize(15);
    textAlign(CENTER);
    text( texto[1], 35, 20, 500, 600 );
  }
}

void mousePressed() {  //aca se programan los botones
  background( 255, 0, 0 );

  if ( estado == 0 && dist(mouseX, mouseY, 300, 400)<=50 ) { //boton para pasar pantalla 2
    estado = 1;
  }
}

void acomodarTexto (){
//lo que se repite siempre es: (lo que tiene R cambia)
//image(pantalla[R], 0, 0, 600, 600);
    //fill(0);
    //textSize(15);
    //textAlign(CENTER);
    //text( texto[R], 35, 20, 500, 600 );
}
