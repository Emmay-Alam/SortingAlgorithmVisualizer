// generating a new array of data (currently set a min of 5 and max of 50 for data values) //

function generateArray (amount) {
  deleteArray();
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    newArray.push(getRandomInt(5, 50))
  };

  return newArray;
};

// rendering newly generated array //

function render (array) {
  const graph = document.querySelector(".graph");

  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");

    bar.classList.add("bar");
    bar.style.height = `${array[i] * Math.PI}px`;

    graph.appendChild(bar);
  };
};

// delete previously generated / rendered array //

function deleteArray () {
  const graph = document.querySelector(".graph");

  while (graph.firstChild) {
    graph.removeChild(graph.firstChild);
  };
};


// using promise function to add delay between sorting animations //
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// random number generator between a range (to provide random values for generated data) - from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random //

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// adding eventListener on button to generate new array of data //

const generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  render(generateArray(parseInt(arraySize.value)));
});

// adding eventListener on slider to adjust array size of data //

const arraySize = document.querySelector("#size");

arraySize.addEventListener("input", function () {
  render(generateArray(parseInt(arraySize.value)));
});