'use strict';
let osc;
let playing;
let colour = 50;
let env;
let button;

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

function draw() {

}

function sound1() {
  env.play();
}
function sound2() {
  env.play();
  osc.freq(500);
}
function sound3() {
  env.play();
  osc.freq(600);
}
function sound4() {
  env.play();
  osc.freq(700);

}
function sound5() {
  env.play();
  osc.freq(800);
}
