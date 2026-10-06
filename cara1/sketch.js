function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);// fons de pantalla, gris si te un número //entre 0 i 255 zero es negre i 255 es blanc, i qualsevol //número entre 0 i 255 serà gris. Si tenim 3 numeros el //primer número es vermellor o R (red), el segon número és //la verdor o G de green i el tercer número és la blavor o //B de blue. Els colors RGB permeten construir setze //milions de colors diferents (255x255x255) 
  fill(255,229,195);//Funciona com el background amb RGB
  ellipse(300,300,0,0);// El primer número entre parèntesis és la posicio x del centre, el segon número é la posició i la alçada del centre del el·lipse, el tercer número és l'amplada i el quart número és l'alçada del el·lipse.
ellipse(300,300,250,250)
  fill(255,255,255)
  ellipse(250,250,90,90)
  fill(255,255,255)
    ellipse(340,250,60,60)
arc(300,350,20,70,0,PI);//Funciona com la el·lipse els primers quatre números i els dos ultims són 0Pi o Pi,0
  triangle(280, 300, 320, 300, 300, 335)
  fill(18, 255, 251)
ellipse(250,250,30,30)
fill(18, 255, 251)
  ellipse(340,250,20,34,120,200,400)
  fill(222, 13, 13)
  triangle(220, 200, 400, 220, 300, 70)
  fill(255, 255, 255)
  circle(300, 70, 30)
    
}
