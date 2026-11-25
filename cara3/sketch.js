// Farem moviments repetitius gràcies al sinus i cosinus que produiran canvis de color repetitius o moviments repetitius de la boca, el ulls o tota la cara
// Crearem unes bariables:  canvipetit que canviara -8 a +8, canvimitja que cambiara de -15 a +15, canvigran que canviara de -50 a +50, canvimoltgran que canviara de -127 a +127.
function setup() {
  createCanvas(600, 600);
}

function draw() {
  let canvipetit=sin (frameCount*0.05)*8;
let canvimitja=sin (frameCount*0.05)*15;
let canvigran=sin (frameCount*0.05)*50;
let canvimoltgran=sin (frameCount*0.05)*127;
print(canvipetit);
  background(75+canvimoltgran,0,220);// fons de pantalla, gris si te un número //entre 0 i 255 zero es negre i 255 es blanc, i qualsevol //número entre 0 i 255 serà gris. Si tenim 3 numeros el //primer número es vermellor o R (red), el segon número és //la verdor o G de green i el tercer número és la blavor o //B de blue. Els colors RGB permeten construir setze //milions de colors diferents (255x255x255)
  fill(255,229,195);//Funciona com el background amb RGB
  ellipse(300,300,0,0);// El primer número entre parèntesis és la posicio x del centre, el segon número é la posició i la alçada del centre del el·lipse, el tercer número és l'amplada i el quart número és l'alçada del el·lipse.
ellipse(300-canvipetit,300,250,250)
  fill(255,255,255)
  ellipse(250-canvipetit,250,90,90)
  fill(255,255,255)
    ellipse(340-canvipetit,250,60,60)
arc(300,350,20,70,0,PI);//Funciona com la el·lipse els primers quatre números i els dos ultims són 0Pi o Pi,0
  triangle(280-canvipetit, 300, 320, 300, 300, 335)
  fill(18, 25, 251)
ellipse(250,250,30,30)
fill(18, 255, 251)
  ellipse(340,250,20,34,)
  fill(222, 13, 13)
  triangle(220-canvipetit, 200, 400, 220, 300, 70)
  fill(5, 25, 55)
  circle(300-canvimitja, 70, 30)
    
}
