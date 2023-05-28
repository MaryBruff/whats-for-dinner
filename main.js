//FoodList:
var sides = [
    "Stake Frights",
    "Omen Rings",
    "Last House Salad On The Left",
    "Jeeper’s Ceasar's",
    "Chucky’s Sliders",
    "Invasion Of The Chicken Tenders",
    "Children Of The Corndog",
    "Drac & Cheese",
]

var mains = [
    "Baconstein’s Monster",
    "Poultrygeist",
    "Jaws",
    "The Exorswiss and Mushrooms",
    "The Van Helsing (garlic burger)",
    "The Hellraiser (jalapeno and habanero aioli)",
    "Dracula’s Casserole",
]

var desserts = [
    "From Dusk Till Dawn Spiced Dark Chocolate Bat Truffles",
    "Cookies & Cream Tombstone Cookies",
    "E.T’s Reese’s Pieces Cake",
    "Corpse Bride Red Velvet Cake",
    "Graveyard Dirt Pudding",
]


//querySelectors:
var sideRadioButton = document.querySelector("#side");
var mainRadioButton = document.querySelector("#main-dish");
var dessertRadioButton = document.querySelector("#dessert");
var entireMealRadioButton = document.querySelector("#entire-meal");
var letscookButton = document.querySelector("#lets-cook-button");


var cookPot = document.querySelector(".cook-pot");
var clearButton = document.querySelector(".clear-button");
var youShouldMake = document.querySelector(".you-should-make");
var foodSuggestion = document.querySelector(".food-suggestion");


//eventListeners:
letscookButton.addEventListener("click", displayDish);
clearButton.addEventListener("click", clearDish);


//functions:

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomDish() {
    if (sideRadioButton.checked) {
        foodSuggestion.innerHTML = sides[getRandomIndex(sides)]
    } else if (mainRadioButton.checked) {
        foodSuggestion.innerHTML = mains[getRandomIndex(mains)]
    } else if (dessertRadioButton.checked) {
        foodSuggestion.innerHTML = desserts[getRandomIndex(desserts)]
        
    }
    return foodSuggestion
}

function displayDish() {
    cookPot.classList.add("hidden");
    foodSuggestion.classList.remove("hidden");
    youShouldMake.classList.add("hidden");
    getRandomDish();
  }


  function clearDish() {
    foodSuggestion.innerHTML = "";
    foodSuggestion.classList.add("hidden");
    cookPot.classList.remove("hidden");
  }


  //   function clearDish() {
//     youShouldMake.innerHTML = ""; 
//     foodSuggestion.classList.add("hidden");
//     cookPot.classList.remove("hidden");
//   }