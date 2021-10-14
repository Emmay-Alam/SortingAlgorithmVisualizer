import SortFunctions from "./scripts/sort.js"
import bubble from "./scripts/algorithms/bubble.js"
import merge from "./scripts/algorithms/merge.js"
import quick from "./scripts/algorithms/quick.js"

const sortFunc = new SortFunctions();

document.addEventListener("DOMContentLoaded", () => {
  // modal variables

  const about = document.querySelector(".about");
  const aboutButton = document.querySelector("#about-modal");
  const instructions = document.querySelector(".instructions");
  const instructionsButton = document.querySelector("#instructions-modal");

  const modalBackground = document.querySelector(".modal-background");
  const close = document.querySelector(".close");

  // modal functionality

  aboutButton.addEventListener("click", function () {
    about.style.display = "flex";
    modalBackground.style.display = "flex";
  });

  instructionsButton.addEventListener("click", function () {
    instructions.style.display = "flex";
    modalBackground.style.display = "flex";
  });

  document.addEventListener("click", function (event) {
    if (event.target.className === "close") {
      if (about.style.display === "flex") about.style.display = "none";
      if (instructions.style.display === "flex") instructions.style.display = "none";
      if (modalBackground.style.display === "flex") modalBackground.style.display = "none";
    }
  });

  // adding eventListener on button to generate new array of data //

  const generate = document.querySelector("#generate");

  generate.addEventListener("click", function () {
    sortFunc.render(sortFunc.generateArray(parseInt(arraySize.value)));
    sortFunc.enableButtons();                                              // enabling buttons here in case user doesn't want to see specific algorithm to the end
  });

  // adding eventListener on slider to adjust array size of data //

  const arraySize = document.querySelector("#size");

  arraySize.addEventListener("input", function () {
    sortFunc.render(sortFunc.generateArray(parseInt(arraySize.value)));
    sortFunc.enableButtons();
  });

  const bubbleSortButton = document.querySelector("#bubble");

  bubbleSortButton.addEventListener("click", async function () {
    sortFunc.updateDesc("bubble");                                         // updating text description for bubble sort
    const bars = document.querySelectorAll(".bar");                        // using querySelectorAll to grab all of the bars in a NodeList
    sortFunc.disableButtons();
    await bubble(sortFunc, bars);
    sortFunc.sorted(bars);                                                 // changing final color of array to green
    sortFunc.enableButtons();
  });

  const mergeSortbutton = document.querySelector("#merge");

  mergeSortbutton.addEventListener("click", async function () {
    sortFunc.updateDesc("merge");
    const bars = document.querySelectorAll('.bar');
    sortFunc.disableButtons();
    await merge(sortFunc, bars, 0, bars.length - 1);
    sortFunc.sorted(bars);
    sortFunc.enableButtons();
  });

  const quickSortbutton = document.querySelector("#quick");

  quickSortbutton.addEventListener("click", async function () {
    sortFunc.updateDesc("quick");
    const bars = document.querySelectorAll(".bar");
    sortFunc.disableButtons();
    await quick(sortFunc, bars, 0, bars.length - 1);
    sortFunc.sorted(bars);
    sortFunc.enableButtons();
  });
});