export default async function bubble (sortFunc, bars) {
  for (let i = 0; i < bars.length - 1; i++) {              // iterating through the length of the NodeList
    for (let j = 0; j < (bars.length - i - 1); j++) {      // iterating through the length of the NodeList MINUS the sorted bars
      bars[j].style.background = "#FF6D6A";                   // setting the two bars being compared to a different color
      bars[j + 1].style.background = "#FF6D6A";

      let bar1 = parseInt(bars[j].style.height);
      let bar2 = parseInt(bars[j + 1].style.height);

      if(bar1 > bar2) {
        await sortFunc.delay(500);                                 // hard coding a value of 250ms for the delay between comparisons
        swap(bars[j], bars[j + 1]);
      };

      bars[j].style.background = "#8BD3E6";                   // regardless of swap, setting compared bars back to original color
      bars[j + 1].style.background = "#8BD3E6";
    };

    bars[bars.length - i - 1].style.background = "#E9EC6B";  // coloring bars bubbled up to the end to denote that it is sorted
  };

  bars[0].style.background = "#E9EC6B";                     // ensuring remaining bar after sorting is colored
};

function swap (bar1, bar2) {                                   // basic swap function to switch bar heights
  let tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;
};