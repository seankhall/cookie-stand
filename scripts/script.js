'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];

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
  var firstColumnCell = document.createElement('th');  
  var tableHeadElement = document.createElement('th');

  firstColumnCell.textContent = '';
  tableRowElement.appendChild(firstColumnCell);

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
    var storeDailyTotal = document.createElement('th');
    storeName.textContent = listOfStores[j].name;
    storeRow.appendChild(storeName);

    for(var x = 0; x < hours.length; x++){
      var storeData = document.createElement('td');
      storeData.textContent = listOfStores[j].hourlySale[x];
      console.log( 'cookies per hour: ', listOfStores[j].name, listOfStores[j].hourlySale[x] )
      storeRow.appendChild(storeData);
    }
    storeDailyTotal.textContent = listOfStores[j].dailyCookies;
    storeRow.appendChild(storeDailyTotal);
    table.appendChild(storeRow);
  }
tableFooter();
}

function tableFooter(){
var footerRow = document.createElement('tr');
var footerElements = document.createElement('th');
footerElements.textContent = 'Hourly Totals';
footerRow.appendChild(footerElements);
var hourlyTotal = 0;
var totalOfTotals = 0;

for(var i = 0; i < hours.length; i++) {
  hourlyTotal = 0;
  for(var j = 0; j < listOfStores.length; j++){
    hourlyTotal += listOfStores[j].hourlySale[i];
    console.log('time:', hours[i], hourlyTotal);
    totalOfTotals += hourlyTotal;
  }
  footerElements = document.createElement('th');
  footerElements.textContent = hourlyTotal;
  footerRow.appendChild(footerElements);
}

footerElements = document.createElement('th');
footerElements.textContent = totalOfTotals;
footerRow.appendChild(footerElements);
table.appendChild(footerRow);
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
