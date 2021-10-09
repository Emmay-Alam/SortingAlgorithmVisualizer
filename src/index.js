// import Sort from "./scripts/sort.js"

document.addEventListener("DOMContentLoaded", () => {

    // generating a new array of data (currently set a min of 5 and max of 100 for data values)

  function generateArray (amount = 25) {
    deleteArray();
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
      bar.style.height = `${array[i]}px`;
      graph.appendChild(bar);
    };
  };

  // delete previously generated / rendered array

  function deleteArray () {
    const graph = document.querySelector(".graph");

    while (graph.firstChild) {
      graph.removeChild(graph.firstChild);
    };
  };

  // random number generator between a range (to provide random values for generated data) - from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

});