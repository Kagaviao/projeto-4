let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
  palavra = batata();
  musica.loop();
}

function preload() {
  imagem = loadImage("foto.png");
  musica = loadSound("musica.mp3");
}

function draw() {
  chocolate();
  batata();
  
  let maximo = width;
  let minimo = 0;
   
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, aparecer);
  text(inicio , 500, 400);
}

function chocolate(){
  background("violet");
  image(imagem,0,0, 1000,800);
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  
}
function batata(){
  let palavras = ["kauane linda","corinthians","amo a gabi","maconha"];
  return random (palavras);
}