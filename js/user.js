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
var Character = function (characterName, id, characterImage, foodImage, drinkImage, drinkName, foodName, description, foodLink, drinkLink, funFact, maxValue, minValue) {
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
  this.minValue = minValue;
  characterArray.push(this);
};


//this is whrere we need to put all Character object as well as thier propreties
var characterArray = [];

//this is whrere we need to put all Character object as well as thier propreties
new Character(
  'You are...Captain Hook',
  'captain-hook',
  'img/char/capthook.png',
  'img/food/crocgumbo.jpg',
  'img/drink/crazycaptain.jpg',
  'Crocodile Gumbo',
  'Crazed Captain',
  'You are intellegent and charming. You know what you want, and will do anything to get it. Luxery is a necessity. Its important to you that people respect you',
  'https://www.thriftyfoods.com/recipes/recipes/crocodile-gumbo-with-chorizo-prawns-and-beer',
  'http://www.barnotes.co/recipes/crazed-captain-hook',
  'Captain Hook can play the piano even though he has a hook for a hand.'
);
new Character(
  'You are...Alice',
  'alice',
  'img/char/alice.png',
  'img/food/alicecookie.jpg',
  'img/drink/alicedrink.jpg',
  'Alice Cookies',
  'Cheshire Cat Cocktail',
  'You are very courteous and trusting. You are also very clever and well mannered. You believe that the world should be a stable and orderly place. However, your curious nature will bring you to challenging and frustrating situations.',
  'https://rosannapansino.com/blogs/recipes/alice-wonderland-eat-me-cookies',
  'https://ourwabisabilife.com/cheshire-cat-inspired-cocktail/',
  'The White Rabbits clock is always set to 12:25'
);

new Character(
  'You are....Hades',
  'hades',
  'img/char/hades.png',
  'img/food/greekhero.jpg',
  'img/drink/hadesunderworldlagoon.jpg',
  'Greek Hero Sandwich',
  'Hades Underworld Lagoon',
  'You are a planner and enjoy strategic encounters.You like things to move at a fast pace. Some might say you are a little sarcastic and cynical but its possible you are just a realist and use humor to express yourself. You also have an anger management problem.',
  'https://oukosher.org/recipes/greek-hero-sandwich-meat/',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'In Greek Mythology Hades was not considered to be evil even though he is Lord of the Dead.'
);

new Character(
  'You are...Baymax',
  'baymax',
  'img/char/baymax.png',
  'img/food/sloppyjoes.png',
  'img/drink/baymaxdrink.jpg',
  'Kyoto Sloppy Joes',
  'The Baymax',
  'You are selfless caring and extremely devoted to your friends. You are very curious of your surroundings and tend to get easily distracted. You love to help others and are usually very calm.',
  'https://www.foodrepublic.com/2018/02/12/recipes-japanese-fusion/',
  'https://www.picuki.com/tag/personalhealthcarecompanion',
  'Baymax is 6ft tall and weighs 75 pounds'
);

new Character(
  'You are...Princess Leia',
  'princess-leia',
  'img/char/leia.png',
  'img/food/cinnamonbuns.jpg',
  'img/drink/princess-leia',
  'Princess Leia Cinnamon Buns',
  'Princess Leia Cocktail',
  'You are sometimes stubborn and sassy but have a great deal of integrity. You like to get things done but you also have a strong sense of teamwork. You are out for the victory of the many rather than personal gain.',
  'https://www.asdagoodliving.co.uk/food/recipes/princess-leia-cinnamon-buns',
  'https://unsobered.com/featured/5-star-wars-inspired-cocktails-to-get-your-jedi-on/',
  'Leia has the best hit ratio with a blaster in the all the Star Wars Movies'
);

new Character(
  'You are...Boba Fett',
  'boba-fett',
  'img/char/bobafett1.png',
  'img/food/bobafettucine.jpg',
  'img/drink/surlysarlac.jpg',
  'Boba Fettucine',
  'Surly Sarlac',
  'you are utterly professional and never welch on a contract. You never have much to say but you know how to get a job done. Some people think you are a bad guy for being ruthlessbut you think of yourself as goal oriented.',
  'http://www.apronstringsblog.com/boba-fettucine-with-feta-for-may-the-fourth/',
  'https://www.diznify.com/surly-sarlacc-drink-copycat-recipe/',
  'Boba Fetts helmet gives him 360 degree vision'
);

new Character(
  'You are...Ursula',
  'ursula',
  'img/char/ursula.png',
  'img/food/spicyoctopus.jpg',
  'img/drink/seawitchesbrew.jpg',
  'Spicy Lemony Grilled Octopus ',
  'Sea Witches Brew',
  'You are ambitious and flamboyant. You are very comfortable in your own skin. You have a great sense of humor and are concerned with the love lives of those you meet. You may be a little power-hungry but you also have an appreciation for a great singing voice',
  'http://tchakayiti.com/home/en/',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'Ursula is King Tritons sister'
);

new Character(
  'You are...Maleficent',
  'maleficent',
  'img/char/malifecent.png',
  'img/food/birthdaycake.jpg',
  'img/drink/malmelonsour.jpg',
  '16th Birthday Cake',
  'Deep Sleep Sour Drink',
  'You are the ultimate Mastermind. You can follow a plan to its completion even if it takes 16 years. You take it personally when you arent invited to parties but realize that maybe its just an oversight and you go anyway. You like to give gifts that last a lifetime.',
  'https://www.deleukstetaartenshop.com/recipe-sweet-16-cake-banoffee-11421',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'Maleficents ravens name is Diablo though this is never actually mentioned in the movie.'
);

new Character(
  'You are...Genie',
  'genie',
  'img/char/genie.png',
  'img/food/agrabahbites.jpg',
  'img/drink/bluegenie.jpg',
  'Agrabah Baklava Bites',
  'Blue Genie',
  'You are happy and fun-loving and are rarely seen without a smile. You like to crack jokes and use humor to difuse tense situations. You are creative and outgoing and do NOT like being cooped up.',
  'https://2geekswhoeat.com/agrabah-baklava-bites-aladdin-recipe/',
  'https://unexpectedlygeeky.com/aladdin-inspired-cocktails/',
  'The peddler that we see at the beginning of Aladdin is in fact the Genie in disguise'
);

new Character(
  'You are...Snow White',
  'snow-white',
  'img/char/snowwhite.png',
  'img/food/snowwhitepie.jpg',
  'img/drink/snowwhitedrink.jpg',
  'Caramel Apple Crunch Pie',
  'Snow White Chocolate Cocktail',
  'You are assertive but kind and have never lost your sense of child-like wonder. You like to keep things tidy and take care of people. You love animals. You are very trusting. As a hopeless romantic you dream of falling in love some day. ',
  'https://lemonbabydesigns.blogspot.com/2015/03/disney-inspired-dinner-movie-snow-white.html',
  'https://www.inliterature.net/food-in-literature/drinks/alcoholic/2012/05/snow-white-cocktail.html',
  'Snow White has her own star on the Hollywood Walk of Fame'
);

new Character(
  'You are...Pinnocchio',
  'pinnocchio',
  'img/char/pinnocchio.png',
  'img/food/spaghetti.jpg',
  'img/drink/greengrasshopper',
  'Perfect Spaghetti and Meatballs',
  'Jiminys Conscience',
  'You are whimsical and maybe a little impressionable. You have a mischevious nature and might be considered to be  over-trusting and sometimes end up in trouble. But, you want to be better and try really hard to do the right thing most of the time. You are known for your Big Fish stories.',
  'https://smittenkitchen.com/2019/03/perfect-meatballs-and-spaghetti/',
  'http://yohodisney.com/jiminys-conscience-a-disney-inspired-cocktail/',
  'When you lie the temperature in your nose actually rises.'
);








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


