async function bubble() {
  const bar = document.querySelectorAll(".bar");          // using querySelectorAll to grab all of the bars in a NodeList

  for (let i = 0; i < bar.length - 1; i++) {              // iterating through the length of the NodeList
    for (let j = 0; j < (bar.length - i - 1); j++) {      // iterating through the length of the NodeList MINUS the sorted bars
      bar[j].style.background = "pink";                   // setting the two bars being compared to a different color
      bar[j + 1].style.background = "pink";

      let bar1 = parseInt(bar[j].style.height);
      let bar2 = parseInt(bar[j + 1].style.height);

      if(bar1 > bar2) {
        await delay(500);                                 // hard coding a value of 500ms for the delay between comparisons
        swap(bar[j], bar[j + 1]);
      };

      bar[j].style.background = "cyan";                   // regardless of swap, setting compared bars back to original color
      bar[j + 1].style.background = "cyan";
    };

    bar[bar.length - i - 1].style.background = "lightgreen";  // coloring bar bubbled up to the end to denote that it is sorted
  };

  bar[0].style.background = "lightgreen";                     // ensuring remaining bar after sorting is colored

  bar.forEach(el => el.style.background = "green");           // graph will be fully colored only when fully sorted
};

function swap (bar1, bar2) {
  let tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;
}

const bubbleSortButton = document.querySelector("#bubble");
bubbleSortButton.addEventListener("click", async function () {
  await bubble();
});