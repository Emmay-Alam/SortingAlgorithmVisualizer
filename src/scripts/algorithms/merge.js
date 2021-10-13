async function mergeHelper (bars, min, max, middle) {
  const leftHalf = middle - min + 1;                      // defining the left half of the array
  const rightHalf = max - middle;                         // defining the right half of the array

  let left = new Array(leftHalf);                         // creating new array to contain the split up left half
  let right = new Array(rightHalf);                       // creating new array to contain the split up right half

  for (let i = 0; i < leftHalf; i++) {                    // iterating through left half and giving it a color
    await delay(250);

    bars[min + i].style.background = "plum";
    left[i] = bars[min + i].style.height;                 // storing each height of the bars into left half
  };

  for (let i = 0; i < rightHalf; i++) {                   // iterating through right half and giving it a DIFFERENT color
    await delay(250);

    bars[middle + 1 + i].style.background = 'yellow';
    right[i] = bars[middle + 1 + i].style.height;         // storing each height of the bars into right half
  };

  await delay(250);

  let i = 0, j = 0, k = min;

  while (i < leftHalf && j < rightHalf) {                // iterating through both arrays (as long as neither are empty) to "merge" the bars together
    await delay(250);

    if (parseInt(left[i]) <= parseInt(right[j])) {       // comparing heights between each bar in the respective arrays
      bars[k].style.height = left[i];                    // left side merge
      bars[k].style.background = 'lightgreen';
      i++;
      k++;
    } else {
      bars[k].style.height = right[j];                   // right side merge
      bars[k].style.background = 'lightgreen';
      j++;
      k++;
    };
  };

  while (i < leftHalf) {                                // in case either array runs out, iterate through a singluar half to "merge" the bars to the main array
    await delay(250);
    bars[k].style.background = 'lightgreen';
    bars[k].style.height = left[i];                     // left side merge
    i++;
    k++;
  };

  while (j < rightHalf) {                                // in case either array runs out, iterate through a singluar half to "merge" the bars to the main array
    await delay(250);
    bars[k].style.background = 'lightgreen';
    bars[k].style.height = right[j];                     // right side merge
    j++;
    k++;
  };
};

async function merge (bars, left, right) {               // merge sort function to recursively call on main array

  if (left < right) {                                    // only calling if previous elements are sorted properly

    const mid = left + Math.floor((right - left) / 2);

    await merge(bars, left, mid);                        // recursive call on left half
    await merge(bars, mid + 1, right);                   // recursive call on right half
    await mergeHelper(bars, left, right, mid);           // helper method taking care of the actual sorting
  };
};

const mergeSortbutton = document.querySelector("#merge");
mergeSortbutton.addEventListener("click", async function() {
  updateDesc("merge");
  const bars = document.querySelectorAll('.bar');
  disableButtons();
  await merge(bars, 0, bars.length - 1);
  sorted(bars);
  enableButtons();
});