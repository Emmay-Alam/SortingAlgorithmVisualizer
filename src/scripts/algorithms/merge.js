async function mergeHelper (sortFunc, bars, min, max, middle) {
  const leftHalf = middle - min + 1;                      // defining the left half of the array
  const rightHalf = max - middle;                         // defining the right half of the array

  let left = new Array(leftHalf);                         // creating new array to contain the split up left half
  let right = new Array(rightHalf);                       // creating new array to contain the split up right half

  for (let i = 0; i < leftHalf; i++) {                    // iterating through left half and giving it a color
    await sortFunc.delay(200);                                     // hard coding a value of 200ms for the delay between comparisons

    bars[min + i].style.background = "#B1A2CA";
    left[i] = bars[min + i].style.height;                 // storing each height of the bars into left half
  };

  for (let i = 0; i < rightHalf; i++) {                   // iterating through right half and giving it a DIFFERENT color
    await sortFunc.delay(200);

    bars[middle + 1 + i].style.background = '#E9EC6B';
    right[i] = bars[middle + 1 + i].style.height;         // storing each height of the bars into right half
  };

  await sortFunc.delay(200);

  let i = 0, j = 0, k = min;

  while (i < leftHalf && j < rightHalf) {                // iterating through both arrays (as long as neither are empty) to "merge" the bars together
    await sortFunc.delay(200);

    if (parseInt(left[i]) <= parseInt(right[j])) {       // comparing heights between each bar in the respective arrays
      bars[k].style.height = left[i];                    // left side merge
      bars[k].style.background = '#77DD77';
      i++;
      k++;
    } else {
      bars[k].style.height = right[j];                   // right side merge
      bars[k].style.background = '#77DD77';
      j++;
      k++;
    };
  };

  while (i < leftHalf) {                                // in case either array runs out, iterate through a singluar half to "merge" the bars to the main array
    await sortFunc.delay(200);
    bars[k].style.background = '#77DD77';
    bars[k].style.height = left[i];                     // left side merge
    i++;
    k++;
  };

  while (j < rightHalf) {                                // in case either array runs out, iterate through a singluar half to "merge" the bars to the main array
    await sortFunc.delay(200);
    bars[k].style.background = '#77DD77';
    bars[k].style.height = right[j];                     // right side merge
    j++;
    k++;
  };
};

export default async function merge (sortFunc, bars, left, right) {               // merge sort function to recursively call on main array

  if (left < right) {                                    // only calling if previous elements are sorted properly

    const mid = left + Math.floor((right - left) / 2);

    await merge(sortFunc, bars, left, mid);                        // recursive call on left half
    await merge(sortFunc, bars, mid + 1, right);                   // recursive call on right half
    await mergeHelper(sortFunc, bars, left, right, mid);           // helper method taking care of the actual sorting
  };
};