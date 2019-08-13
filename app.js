'use strict';

//First and  Pike
var firstandpike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  hourlySale: [],
  randCust: function() {
    this.minCust = Math.ceil(this.minCust);
    this.maxCust = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  perCook: function(){
    var cookiesPurchased = 0;
    for (var i = 0; i < 15; i++){
      cookiesPurchased = this.randCust() * this.avgCook;
      this.hourlySale.push(cookiesPurchased);
    }
    return [this.hourlySale];
  },
};

console.log(firstandpike.randCust());
firstandpike.perCook();
console.log(firstandpike.hourlySale);

//SeaTac Airport
var seatac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  hourlySale: [],
  randCust: function() {
    this.minCust = Math.ceil(this.minCust);
    this.maxCust = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  perCook: function(){
    var cookiesPurchased = 0;
    for (var i = 0; i < 15; i++){
      cookiesPurchased = this.randCust() * this.avgCook;
      this.hourlySale.push(cookiesPurchased);
    }
    return [this.hourlySale];
  },
};

console.log(seatac.randCust());
seatac.perCook();
console.log(seatac.hourlySale);

//Seattle Center
var center = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  hourlySale: [],
  randCust: function() {
    this.minCust = Math.ceil(this.minCust);
    this.maxCust = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  perCook: function(){
    var cookiesPurchased = 0;
    for (var i = 0; i < 15; i++){
      cookiesPurchased = this.randCust() * this.avgCook;
      this.hourlySale.push(cookiesPurchased);
    }
    return [this.hourlySale];
  },
};

console.log(center.randCust());
center.perCook();
console.log(center.hourlySale);

//Capitol Hill
var hill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  hourlySale: [],
  randCust: function() {
    this.minCust = Math.ceil(this.minCust);
    this.maxCust = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  perCook: function(){
    var cookiesPurchased = 0;
    for (var i = 0; i < 15; i++){
      cookiesPurchased = this.randCust() * this.avgCook;
      this.hourlySale.push(cookiesPurchased);
    }
    return [this.hourlySale];
  },
};

console.log(hill.randCust());
hill.perCook();
console.log(hill.hourlySale);

//Alki
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  hourlySale: [],
  randCust: function() {
    this.minCust = Math.ceil(this.minCust);
    this.maxCust = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  perCook: function(){
    var cookiesPurchased = 0;
    for (var i = 0; i < 15; i++){
      cookiesPurchased = this.randCust() * this.avgCook;
      this.hourlySale.push(cookiesPurchased);
    }
    return [this.hourlySale];
  },
};

console.log(alki.randCust());
alki.perCook();
console.log(alki.hourlySale);

var elementList = document.getElementById('list');

for (var i = 0; i = )

