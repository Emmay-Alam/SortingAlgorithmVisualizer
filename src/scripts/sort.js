// generating a new array of data (currently set a min of 5 and max of 100 for data values)

function generateArray (amount = 25) {
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    newArray.push(getRandomInt(5, 100))
  };

  return newArray;
};

// rendering newly generated array

function render (array) {
  const graph = document.querySelector(".graph");

  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.innerHTML = `${array[i]}`;
    graph.appendChild(bar);
  };
};

// random number generator between a range (to provide random values for generated data)

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// creating a button to generate new array of data

const generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
  render(generateArray());
});
