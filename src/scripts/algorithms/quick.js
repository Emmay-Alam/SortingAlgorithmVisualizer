async function partition (sortFunc, bars, left, right) {            // this particular implementation of partition is the Lomuto partition, using the last element as the pivot
  bars[right].style.background = "#E9EC6B";               // pivot bar

  let i = left - 1;                                       // index of smallest bar

  for (let j = left; j <= right - 1; j++) {
    bars[j].style.background = "#EFBE7D";                 // currently selected bar to compare to pivot

    await sortFunc.delay(250);                                     // hard coding a value of 250ms for the delay between comparisons

    if (parseInt(bars[j].style.height) <= parseInt(bars[right].style.height)) {   // checking for elements less or equal to the pivot
      i++;                                                // increment to the next bar
      swap(bars[i], bars[j]);

      bars[i].style.background = "#FF6D6A";               // color of the bars LESS than the pivot bar after swap

      if (i !== j) bars[j].style.background = "#B1A2CA";  // color of the bars MORE than the pivot bar after swap
      await sortFunc.delay(250);
    } else {
      bars[j].style.background = "#B1A2CA";               // color of the bars MORE than the pivot with no swap
    }
  }

  i++;
  await sortFunc.delay(250);

  swap(bars[i], bars[right]);

  bars[right].style.background = "#B1A2CA";               // ensuring bars MORE than the pivot are the same color
  bars[i].style.background = "lightgreen";                // coloring sorted pivot

  await sortFunc.delay(250);

  for (let k = 0; k < bars.length; k++) {
    if (bars[k].style.background !== "lightgreen")        //checking for sorted pivot color and then resetting the colors of all the other bars
      bars[k].style.background = "#8BD3E6";
  }

  return i;                                             // returning pivot index
}

export default async function quick (sortFunc, bars, left, right) {              // quick sort function to recursively call on main array
  if (left < right) {
    let pivot = await partition(sortFunc, bars, left, right);     // retrieving pivot index from partition helper function
    await quick(sortFunc, bars, left, pivot - 1);                 // recursive call on left half
    await quick(sortFunc, bars, pivot + 1, right);                // recursive call on right half
  }
}

function swap (bar1, bar2) {                            // basic swap function to switch bar heights
  let tempHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = tempHeight;
};
