'use strict';
let osc;
let playing;
let colour = 50;
let env;
let button;
//let gost;

function setup() {
  createCanvas(windowWidth, windowHeight);

  env = new p5.Envelope();
  env.setADSR(0.5, 0.25, 0.5, 0.1);
  env.setRange(0.8, 0);

  osc = new p5.Oscillator();

  osc.setType('sine');
  osc.start();
  osc.freq(400);
  osc.amp(env);

  button = createButton('Start');
  button.mousePressed(gost);


}

function draw() {

}

function gost() {
  button = createButton('Sound 1');
  button.mousePressed(sound1);

  button = createButton('Sound 2');
  button.mousePressed(sound2);

  button = createButton('Sound 3');
  button.mousePressed(sound3);

  button = createButton('Sound 4');
  button.mousePressed(sound4);

  button = createButton('Sound 5');
  button.mousePressed(sound5);

}
function sound1() {
  env.play();
  background(66,10,10)
}
function sound2() {
  env.play();
  osc.freq(500);
  background(86,10,10)
}
function sound3() {
  env.play();
  osc.freq(600);
  background(106,10,10)
}
function sound4() {
  background(126,10,10)
  env.play();
  osc.freq(700);

}
function sound5() {
  background(166,10,10)
  env.play();
  osc.freq(800);
}
