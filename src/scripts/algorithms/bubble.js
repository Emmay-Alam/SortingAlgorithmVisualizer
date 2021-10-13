async function bubble (bars) {
  for (let i = 0; i < bars.length - 1; i++) {              // iterating through the length of the NodeList
    for (let j = 0; j < (bars.length - i - 1); j++) {      // iterating through the length of the NodeList MINUS the sorted bars
      bars[j].style.background = "pink";                   // setting the two bars being compared to a different color
      bars[j + 1].style.background = "pink";

      let bar1 = parseInt(bars[j].style.height);
      let bar2 = parseInt(bars[j + 1].style.height);

      if(bar1 > bar2) {
        await delay(250);                                 // hard coding a value of 250ms for the delay between comparisons
        swap(bars[j], bars[j + 1]);
      };

      bars[j].style.background = "cyan";                   // regardless of swap, setting compared bars back to original color
      bars[j + 1].style.background = "cyan";
    };

    bars[bars.length - i - 1].style.background = "yellow";  // coloring bars bubbled up to the end to denote that it is sorted
  };

  bars[0].style.background = "yellow";                     // ensuring remaining bar after sorting is colored
};

function swap (bar1, bar2) {                                   // basic swap function to switch bar heights
  let tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;
}

const bubbleSortButton = document.querySelector("#bubble");
bubbleSortButton.addEventListener("click", async function () {
  updateDesc("bubble");                                         // updating text description for bubble sort
  const bars = document.querySelectorAll(".bar");               // using querySelectorAll to grab all of the bars in a NodeList
  disableButtons();
  await bubble(bars);
  sorted(bars);                                                 // changing final color of array to green
  enableButtons();
});