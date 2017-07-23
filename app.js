'use strict';

var items = [];
var round = 0;


function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;

}

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dogDuck = new Image('dog-duck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var petSweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assets/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assets/usb.gif');
var waterCan = new Image('water-can', './assets/water-can.jpg');
var wineGlass = new Image('wine-glass', './assets/wine-glass.jpg');

var allImages = [bag, banana, bathroom, boots, breakfast, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function getRandomNum(min, max) {
  return Math.ceiling(Math.random() * (max - min) + min);
};

var numClicks = 0;

var previousThree = [];

function randomImage()
