// cat clicks
let cats = 500;
let cheeseburger = 0;
let nextburgerCost = 0;
let mouse = 0;
let nextmouseCost = 0;
let cps = 0;
let cpc = 1;

function catClick(number) {
  cats = cats + number + catPowers;
  document.getElementById("cats").innerHTML = cats;
}

//auto generators

function buyCheeseburger() {
  let cheeseburgerCost = Math.floor(100 * Math.pow(1.2, cheeseburger));
  if (cats >= cheeseburgerCost) {
    cheeseburger = cheeseburger + 1;
    cats = cats - cheeseburgerCost;
    cps = cps + 1;
    document.getElementById("cheeseburger").innerHTML = cheeseburger;
    document.getElementById("cats").innerHTML = cats;
    document.getElementById("cps").innerHTML = cps;
  }
  nextburgerCost = Math.floor(100 * Math.pow(1.2, cheeseburger));
  document.getElementById("cheeseburgerCost").innerHTML = nextburgerCost;
}

window.setInterval(function() {
  cats = cats + cheeseburger;
  document.getElementById("cats").innerHTML = cats;
}, 1000);

function buyMouse() {
  let mouseCost = Math.floor(1500 * Math.pow(1.4, mouse));
  if (cats >= mouseCost) {
    mouse = mouse + 1;
    cats = cats - mouseCost;
    cps = cps + 5;
    document.getElementById("mouse").innerHTML = mouse;
    document.getElementById("cats").innerHTML = cats;
    document.getElementById("cps").innerHTML = cps;
  }
  nextmouseCost = Math.floor(1500 * Math.pow(1.4, mouse));
  document.getElementById("mouseCost").innerHTML = nextmouseCost;
}

window.setInterval(function() {
  if (mouse > 0) {
    cats = cats + mouse * 5;
    document.getElementById("cats").innerHTML = cats;
  }
}, 1000);

cps = cheeseburger + mouse * 5;

//powerups
let catPowers = 0;
let nextCatPowerCost = 0;

function catPower() {
  let catPowerCost = Math.floor(500 * Math.pow(1.5, catPowers));
  if (cats >= catPowerCost) {
    catPowers = catPowers + 1;
    cats = cats - catPowerCost;
    cpc = cpc + catPowers;
    document.getElementById("catpower").innerHTML = catPowers;
    document.getElementById("cats").innerHTML = cats;
    document.getElementById("cpc").innerHTML = cpc;
  }
  nextCatPowerCost = Math.floor(500 * Math.pow(1.5, catPowers));
  document.getElementById("catpowerCost").innerHTML = nextCatPowerCost;
}

//save, load and delete
function save() {
  localStorage.setItem("cats", JSON.stringify(cats));
  localStorage.setItem("cheeseburger", JSON.stringify(cheeseburger));
  localStorage.setItem("cheeseburgerCost", JSON.stringify(cheeseburgerCost));
  localStorage.setItem("mouse", JSON.stringify(mouse));
  localStorage.setItem("mouseCost", JSON.stringify(mouseCost));
  localStorage.setItem("nextburgerCost", JSON.stringify(nextburgerCost));
  localStorage.setItem("nextmouseCost", JSON.stringify(nextmouseCost));
}

function load() {
  cats = JSON.parse(localStorage.getItem("cats"));
  cheeseburger = JSON.parse(localStorage.getItem("cheeseburger"));
  cheeseburgerCost = JSON.parse(localStorage.getItem("cheeseburgerCost"));
  mouse = JSON.parse(localStorage.getItem("mouse"));
  mouseCost = JSON.parse(localStorage.getItem("mouseCost"));
  nextCost = JSON.parse(localStorage.getItem("nextburgerCost"));
  nextCost = JSON.parse(localStorage.getItem("nextmouseCost"));
  document.getElementById("cats").innerHTML = JSON.parse(
    localStorage.getItem("cats")
  );
  document.getElementById("cheeseburger").innerHTML = JSON.parse(
    localStorage.getItem("cheeseburger")
  );
  document.getElementById("cheeseburgerCost").innerHTML = JSON.parse(
    localStorage.getItem("nextburgerCost")
  );
  document.getElementById("mouse").innerHTML = JSON.parse(
    localStorage.getItem("mouse")
  );
  document.getElementById("mouseCost").innerHTML = JSON.parse(
    localStorage.getItem("nextmouseCost")
  );
}

function del() {
  localStorage.removeItem("cats");
  localStorage.removeItem("cheeseburger");
  localStorage.removeItem("cheeseburgerCost");
  localStorage.removeItem("mouse");
  localStorage.removeItem("mouseCost");
  localStorage.removeItem("nextburgerCost");
  localStorage.removeItem("nextmouseCost");
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
