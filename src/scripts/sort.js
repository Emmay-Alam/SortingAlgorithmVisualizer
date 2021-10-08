// generating a new array of data (currently set a min of 5 and max of 100 for data values)

function generateArray (amount = 25) {
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    newArray.push(getRandomInt(5, 100))
  }

  const graph = document.querySelector("#graph");

  for (let i = 0; i < amount; i++) {
    const bar = document.createElement("div");
    graph.appendChild(bar);
  }
}

// random number generator between a range (to provide random values for generated data)

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// creating a button to generate new array of data

const generate = document.querySelector(".generate");
generate.addEventListener("click", function () {
  generateArray();
});
