// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (const element of dairy) {
    console.log(element);
  }
}

console.log(logDairy(dairy));

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (keys of Object.keys(bird)) console.log(keys, ": ", bird[keys]);
}

birdCan();

// Task 3

function animalCan() {
  for (prop in bird) {
    console.log(prop, ": ", bird[prop]);
  }
}
animalCan();
