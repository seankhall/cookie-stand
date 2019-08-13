'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];

var locations = [];

//First and Pike
var firstPike = {
  name: 'First and Pike',
  hourlySale: [],
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  rand: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;// Source: MDN Random Docs/Example
  },
  perCook: function() {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.rand() * this.avgCook);
      this.hourlySale.push(multiply);
    }
  },
};


//SeaTac Airport
var seaTac = {
  name: 'SeaTac Airport',
  hourlySale: [],
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  rand: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  perCook: function() {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.rand() * this.avgCook);
      this.hourlySale.push(multiply);
    }
  },
};

//Seattle Center
var center = {
  name: 'Seattle Center',
  hourlySale: [],
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  rand: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  perCook: function() {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.rand() * this.avgCook);
      this.hourlySale.push(multiply);
    }
  },
};

//Capitol Hill
var hill = {
  name: 'Capitol Hill',
  hourlySale: [],
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  rand: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  perCook: function() {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.rand() * this.avgCook);
      this.hourlySale.push(multiply);
    }
  },
};

//Alki
var alki = {
  name: 'Alki',
  hourlySale: [],
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  rand: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  perCook: function() {
    for (var i = 0; i < hours.length; i++) {
      var multiply = Math.ceil(this.rand() * this.avgCook);
      this.hourlySale.push(multiply);
    }
  },
};

function render () {

  var section = document.getElementById('locations');

  for( var i = 0; i < locations.length; i++) {

    var location = locations[i];

    var title = document.createElement('h3');
    title.textContent = location.name;
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
  locations.push(firstPike, seaTac, center, hill, alki);
}

initialize();
render();
