'use strict';

var firstImageEl = document.getElementsByClassName('first-image')[0];
var secondImageEl = document.getElementsByClassName('second-image')[0];
var thirdImageEl = document.getElementsByClassName('third-image')[0];

function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
