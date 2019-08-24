'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];

// var locations = [];


var listOfStores = [];

function Store(name, minCust, maxCust, avgCook) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.hourlySale = [];
  listOfStores.push(this);
  this.dailyCookies = 0;
}

// Store.prototype.hoursOpen = hours.length;
// Store.prototype.salesTotal = 0;

Store.prototype.randomCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

Store.prototype.perCook = function () {
  for (var i = 0; i < hours.length; i++){
    var multiply = Math.ceil(this.randomCust() * this.avgCook);
    this.hourlySale.push(multiply);
    this.dailyCookies += multiply;

  }
  return [this.hourlySale];
};

var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var hill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function createTable () {

  var table = document.getElementById('table');

  var tableRowElement = document.createElement('tr');

  var tableHeadElement = document.createElement('th');

  tableHeadElement.textContent = 'empty';
  tableRowElement.appendChild(tableHeadElement);

  for ( var i = 0; i < hours.length; i++) {
    var tableHeadElement2 = document.createElement('th');
    tableHeadElement2.textContent = hours[i];
    tableRowElement.appendChild(tableHeadElement2);
  }

  tableHeadElement.textContent = 'Store Totals';

  tableRowElement.appendChild(tableHeadElement);

  table.appendChild(tableRowElement);

  for(var j = 0; j < listOfStores.length; j++) {
    var storeRow = document.createElement('tr');
    var storeName = document.createElement('th');
    storeName.textContent = listOfStores[j].name;
    storeRow.appendChild(storeName);

    for(var x = 0; x < hours.length; x++){
      var storeData = document.createElement('td');
      storeData.textContent = listOfStores[j].hourlySale[x];
      storeRow.appendChild(storeData);
    }
    storeData.textContent = listOfStores[j].dailyCookies;
    storeRow.appendChild(storeData);
    table.appendChild(storeRow);
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
createTable();
// createBody();
// createFooter();

for (var j = 0; j < listOfStores.length; j++){
  listOfStores[j].randomCust();
  listOfStores[j].perCook();
}

for ( var i = 0; i < listOfStores.length; i++ ) {
  console.log(listOfStores[i]);
}
