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
UserInput.prototype.addInput = function (image, personInfo, food, drink, funFact) {
  input.push(new Character(image, personInfo, food, drink, funFact));
};
UserInput.prototype.saveToLocalStorage = function () {
  // this instance method will save all the user info to the local storage

};

// Character constructor
var Character = function (characterName, id, characterImage, foodImage, drinkImage, drinkName, foodName, description, foodLink, drinkLink, funFact, maxValue, mimValue) {
  this.characterName = characterName;
  this.id = id;
  this.characterImage = characterImage;
  this.foodImage = foodImage;
  this.drinkImage = drinkImage;
  this.drinkName = drinkName;
  this.foodName = foodName;
  this.description = description;
  this.foodLink = foodLink;
  this.drinkLink = drinkLink;
  this.funFact = funFact;
  this.maxValue = maxValue;
  this.mimValue = mimValue;
};

//this is whrere we need to put all Character object as well as thier propreties
var characterArray = [];

// function that will render the Character to the page
function renderCharacter() {
  for (var i = 0; i < characterArray.length; i++) {
    var characterEl = document.getElementById(characterArray[i].id);
    var characterH1 = document.createElement('h1');
    characterH1.textContent = characterArray[i].characterName;
    characterEl.appendChild(characterH1);
    var characterImg = document.createElement('img');
    characterImg.src = characterArray[i].characterImage;
    characterEl.appendChild(characterImg);
    var characterArticle = document.createElement('article');
    characterArticle.textContent = characterArray[i].description;
    characterEl.appendChild(characterArticle);
    var characterDrinkEl = document.createElement('h1');
    characterDrinkEl.textContent = characterArray[i].drinkName;
    characterEl.appendChild(characterDrinkEl);
    var characterDrinkImg = document.createElement('img');
    characterDrinkImg.src = characterArray[i].drinkImage;
    characterEl.appendChild(characterDrinkImg);
    var characterDrinkLink = document.createElement('a');
    characterDrinkLink.href = characterArray[i].drinkLink;
    characterEl.appendChild(characterDrinkLink);
    var characterFoodEl = document.createElement('h1');
    characterFoodEl.textContent = characterArray[i].FoodName;
    characterEl.appendChild(characterFoodEl);
    var characterFoodImg = document.createElement('img');
    characterFoodImg.src = characterArray[i].foodImage;
    characterEl.appendChild(characterFoodImg);
    var characterFoodLink = document.createElement('a');
    characterFoodLink.href = characterArray[i].foodLink;
    characterEl.appendChild(characterFoodLink);
    var title = document.createElement('h1');
    title.textContent = 'Fun Fact';
    characterEl.appendChild(title);
    var funFactEl = document.createElement('article');
    funFactEl.textContent = characterArray[i].funFact;
    characterEl.appendChild(funFactEl);
  }
}



function handleSubmit(event) {
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
  console.log(car);

}

// this event handeler will make sure that all the user info is being push into the array.
var unserinputFom = document.getElementById('userInput');
unserinputFom.addEventListener('submit', handleSubmit);


