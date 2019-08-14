'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];

// var locations = [];

// //First and Pike
// var firstPike = {
//   name: 'First and Pike',
//   hourlySale: [],
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//   rand: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;// Source: MDN Random Docs/Example
//   },
//   perCook: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.rand() * this.avgCook);
//       this.hourlySale.push(multiply);
//     }
//   },
// };


// //SeaTac Airport
// var seaTac = {
//   name: 'SeaTac Airport',
//   hourlySale: [],
//   minCust: 3,
//   maxCust: 24,
//   avgCook: 1.2,
//   rand: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   perCook: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.rand() * this.avgCook);
//       this.hourlySale.push(multiply);
//     }
//   },
// };

// //Seattle Center
// var center = {
//   name: 'Seattle Center',
//   hourlySale: [],
//   minCust: 11,
//   maxCust: 38,
//   avgCook: 3.7,
//   rand: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   perCook: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.rand() * this.avgCook);
//       this.hourlySale.push(multiply);
//     }
//   },
// };

// //Capitol Hill
// var hill = {
//   name: 'Capitol Hill',
//   hourlySale: [],
//   minCust: 20,
//   maxCust: 38,
//   avgCook: 2.3,
//   rand: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   perCook: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.rand() * this.avgCook);
//       this.hourlySale.push(multiply);
//     }
//   },
// };

// //Alki
// var alki = {
//   name: 'Alki',
//   hourlySale: [],
//   minCust: 2,
//   maxCust: 16,
//   avgCook: 4.6,
//   rand: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   perCook: function() {
//     for (var i = 0; i < hours.length; i++) {
//       var multiply = Math.ceil(this.rand() * this.avgCook);
//       this.hourlySale.push(multiply);
//     }
//   },
// };
var listOfStores = [];

function Store(name, minCust, maxCust, avgCook) {
  this.name = name;
  this.hourlySale = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  listOfStores.push(this);
}


Store.prototype.randomCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

Store.prototype.perCook = function () {
  for (var i = 0; i < hours.length; i++){
    var multiply = Math.ceil(this.randomCust() * this.avgCook);
    this.hourlySale.push(multiply);
  }
  return [this.hourlySale];
};




var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var hill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);



function render () {

  var section = document.getElementById('locations');

  for( var i = 0; i < listOfStores.length; i++) {

    var location = listOfStores[i];

    var title = document.createElement('h3');
    title.textContent = listOfStores[i].name;
    section.appendChild(title);

    var list = document.createElement('ul');

    for ( var x = 0; x < hours.length; x++) {
      var projection = hours[x] + ': ' + location.hourlySale[x];
      var li = document.createElement('li');
      li.textContent = projection;
      list.appendChild(li);
    }


    section.appendChild(list);
  }
}

function initialize() {
  firstPike.perCook();
  seaTac.perCook();
  center.perCook();
  hill.perCook();
  alki.perCook();
}

initialize();
render();

for (var j = 0; j < listOfStores.length; j++){
  listOfStores[j].randomCust();
  listOfStores[j].perCook();
}

for ( var i = 0; i < listOfStores.length; i++ ) {
  console.log(listOfStores[i]);
}
