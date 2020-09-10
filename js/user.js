'use strict';

// input array is an array of UserInput and Character instances.
var input = [];

// User input constructor.
var UserInput = function (name, age) {
  this.name = name;
  this.age = age;
  input.push(this);
};

// this instance method will add the propreties of the Character constructor to the array input.
UserInput.prototype.addInput = function (person, food, drink) {
  input.push(new Character(person, food, drink));
};

// Character constructor
var Character = function (person, food, drink) {
  this.person = person;
  this.food = food;
  this.drink = drink;
};

UserInput.prototype.saveToLocalStorage = function(){
  // this instance method will save all the user info to the local storage

};


function handleSubmit(event){
  // prevent the page from reloading
  event.preventDefault();
  // adding all the info enter by the user
  getUserInfo();
  UserInput.saveToLocalStorage();
}

function getUserInfo() {
  // checked out if thier are over 21 or not
  var selectEl = document.getElementById('response');

  // booleen variable call response: this will return false if the user is under 21
  var response = selectEl.checked;

  // suss out the user Name entered by the user
  var userNameEl = document.getElementById('name');
  var userName = userNameEl.value;
  // generate the user input
  var car = new UserInput(userName, response);
  console .log (car);

}


var unserinputFom = document.getElementById('userInput');
unserinputFom.addEventListener('submit', handleSubmit);










