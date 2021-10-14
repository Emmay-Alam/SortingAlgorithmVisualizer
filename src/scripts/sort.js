import { titles, descriptions } from "./descriptions.js"

export default class SortFunctions {
  constructor () {};
  // generating a new array of data (currently set a min of 5 and max of 100 for data values) //

  generateArray (amount) {
    this.deleteArray();
    const newArray = [];

    for (let i = 0; i < amount; i++) {
      newArray.push(this.getRandomInt(5, 100))
    };

    return newArray;
  };

  // rendering newly generated array //

  render (array) {
    const graph = document.querySelector(".graph");

    for (let i = 0; i < array.length; i++) {
      const bar = document.createElement("div");

      bar.classList.add("bar");
      bar.style.height = `${array[i] * Math.PI}px`;

      graph.appendChild(bar);
    };
  };

  // delete previously generated / rendered array //

  deleteArray () {
    const graph = document.querySelector(".graph");

    while (graph.firstChild) {
      graph.removeChild(graph.firstChild);
    };
  };

  // using promise function to add delay between sorting animations //
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // random number generator between a range (to provide random values for generated data) - from MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random //

  getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  // changing color for sorted array //

  sorted (bars) {
    bars.forEach(el => el.style.background = "green");
  }

  // updating text descriptions on algorithm event click //

  updateDesc (desc) {
    const title = document.querySelector(".description-title");
    title.innerHTML = titles[`${desc}Title`];

    const description = document.querySelector(".description")
    description.innerHTML = descriptions[`${desc}Desc`];
  };

  // button disable function (meant for during sort) //

  disableButtons () {
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
  };

  // button enable function (meant for after sorting is complete) //

  enableButtons () {
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
  };
};