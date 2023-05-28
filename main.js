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
    "Jaws Burger",
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
    if (entireMealRadioButton.checked) {
      var side = sides[getRandomIndex(sides)];
      var main = mains[getRandomIndex(mains)];
      var dessert = desserts[getRandomIndex(desserts)];
      foodSuggestion.innerHTML = `${main}<br>with a side of ${side} and<br> ${dessert} <br>for dessert!`;
    } else if (sideRadioButton.checked) {
      foodSuggestion.innerHTML = sides[getRandomIndex(sides)];
    } else if (mainRadioButton.checked) {
      foodSuggestion.innerHTML = mains[getRandomIndex(mains)];
    } else if (dessertRadioButton.checked) {
      foodSuggestion.innerHTML = desserts[getRandomIndex(desserts)];
    }
    return foodSuggestion;
}

function displayDish() {
    cookPot.classList.add("hidden");
    youShouldMake.classList.remove("hidden");
    
    if (entireMealRadioButton.checked || sideRadioButton.checked || mainRadioButton.checked || dessertRadioButton.checked) {
        foodSuggestion.classList.remove("hidden");
        getRandomDish();
    } else {
        foodSuggestion.classList.add("hidden");
    }
}

  function clearDish() {
    foodSuggestion.innerHTML = "";
    foodSuggestion.classList.add("hidden");
    cookPot.classList.remove("hidden");
    clearButton.classList.remove("hidden");
}
