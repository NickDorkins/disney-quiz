// Character constructor
var Character = function (characterName, id, characterImage, foodImage, drinkImage, drinkName, foodName, description, foodLink, drinkLink, funFact, value) {
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
  this.value = value;
  characterArray.push(this);
};

//this is whrere we need to put all Character object as well as thier propreties
var characterArray = [];
new Character(
  'Captain Hook',
  'captain-hook',
  'img/char/capthook.png',
  'img/food/crocgumbo.jpg',
  'img/drink/crazycaptain.jpg',
  'Crocodile Gumbo',
  'Crazed Captain',
  'You are intellegent and charming. You know what you want and will do anything to get it. Luxery is a necessity. Its important to you that people respect you',
  'https://www.thriftyfoods.com/recipes/recipes/crocodile-gumbo-with-chorizo-prawns-and-beer',
  'http://www.barnotes.co/recipes/crazed-captain-hook',
  'Captain Hook can play the piano even though he has a hook for a hand'
);
new Character(
  'Alice',
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
  'Hades',
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
  'Baymax',
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
  'Princess Leia',
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
  'Boba Fett',
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
  'Ursula',
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
  'Maleficent',
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
  'Genie',
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
  'Snow White',
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






// function that will render the Character to the page
// function renderCharacter() {
//   for (var i = 0; i < characterArray.lenght; i++) {
//     var
//   }
// }