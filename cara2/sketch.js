function setup() {
  createCanvas(1200, 600);
}
//mouseX=300; mouseY=300 
function draw() {
  background(200);// fons de pantalla, gris si te un número //entre 0 i 255 zero es negre i 255 es blanc, i qualsevol //número entre 0 i 255 serà gris. Si tenim 3 numeros el //primer número es vermellor o R (red), el segon número és //la verdor o G de green i el tercer número és la blavor o //B de blue. Els colors RGB permeten construir setze //milions de colors diferents (255x255x255)
  fill(0,0,0)
  text("mouseX"+mouseX,20,20)
  text("mouseY: "+mouseY,20,40)
  fill(mouseX-327, 1235, 2133);//Funciona com el background amb RGB
 // ellipse(300,300,0,0);// El primer número entre parèntesis és la posicio x del centre, el segon número é la posició i la alçada del centre del el·lipse, el tercer número és l'amplada i el quart número és l'alçada del el·lipse.
ellipse(mouseX,mouseY,+mouseX/1,250)
  fill(255,255,255)
  ellipse(mouseX-50,mouseY-50,90,90)
  fill(255,255,255)
    ellipse(mouseX+40,mouseY-50,60,60)
arc(mouseX,mouseY+50,20,70,0,PI);//Funciona com la el·lipse els primers quatre números i els dos ultims són 0Pi o Pi,0
  triangle(mouseX-20,mouseY,mouseX+20,mouseY,mouseX,mouseY+35)
 fill(mouseX-255, 41, 0) 
ellipse(mouseX-50,mouseY-50,30,30)
fill(mouseX-255, 41, 0)
  ellipse(mouseX+40,mouseY-50,20,34)
fill(mouseX-180, 0, 245
)
  triangle( mouseX - 100, mouseY -100, mouseX + 120, mouseY -60, mouseX, mouseY - 240);
  fill(mouseX-255, 255, 255)
  circle(mouseX,mouseY-230, 30)
    
}
