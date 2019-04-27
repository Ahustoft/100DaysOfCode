// cat clicks
let cats = 0;

function catClick(number) {
  cats = cats + number;
  document.getElementById("cats").innerHTML = cats;
}

let cheeseburger = 0;
let nextburgerCost = 0;

//auto generators
function buyCheeseburger() {
  let cheeseburgerCost = Math.floor(10 * Math.pow(1.2, cheeseburger));
  if (cats >= cheeseburgerCost) {
    cheeseburger = cheeseburger + 1;
    cats = cats - cheeseburgerCost;
    document.getElementById("cheeseburger").innerHTML = cheeseburger;
    document.getElementById("cats").innerHTML = cats;
  }
  nextburgerCost = Math.floor(10 * Math.pow(1.2, cheeseburger));
  document.getElementById("cheeseburgerCost").innerHTML = nextburgerCost;
}

window.setInterval(function() {
  catClick(cheeseburger);
}, 1000);

let mouse = 0;
let nextmouseCost = 0;

function buyMouse() {
  let mouseCost = Math.floor(150 * Math.pow(1.4, mouse));
  if (cats >= mouseCost) {
    mouse = mouse + 1;
    cats = cats - mouseCost;
    document.getElementById("mouse").innerHTML = mouse;
    document.getElementById("cats").innerHTML = cats;
  }
  nextmouseCost = Math.floor(150 * Math.pow(1.4, mouse));
  document.getElementById("mouseCost").innerHTML = nextmouseCost;
}

window.setInterval(function() {
  catClick(mouse * 5);
}, 1000);

//powerups
function catPower() {}
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
