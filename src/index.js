document.addEventListener("DOMContentLoaded", () => {
  // generating a new array of data (currently set a min of 5 and max of 100 for data values) //

  function generateArray (amount) {
    deleteArray();
    const newArray = [];

    for (let i = 0; i < amount; i++) {
      newArray.push(getRandomInt(5, 100))
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
    enableButtons();                                              // enabling buttons here in case user doesn't want to see specific algorithm to the end
  });

  // changing color for sorted array //

  function sorted (bars) {
    bars.forEach(el => el.style.background = "green");
  }

  // adding eventListener on slider to adjust array size of data //

  const arraySize = document.querySelector("#size");

  arraySize.addEventListener("input", function () {
    render(generateArray(parseInt(arraySize.value)));
  });

  // updating text descriptions on algorithm event click //

  function updateDesc (desc) {
    const title = document.querySelector(".description-title");
    title.innerHTML = titles[`${desc}Title`];

    const description = document.querySelector(".description")
    description.innerHTML = descriptions[`${desc}Desc`];
  };

  // button disable function (meant for during sort) //

  function disableButtons () {
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
  };

  // button enable function (meant for after sorting is complete) //

  function enableButtons () {
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
  };

  const titles = {
    bubbleTitle: "Bubble Sort",
    mergeTitle: "Merge Sort",
    quickTitle: "Quick Sort",
  }

  const descriptions = {
    bubbleDesc: "Bubble sort, also referred to as comparison sort, is a simple sorting algorithm that repeatedly goes through the list, compares adjacent elements and swaps them if they are in the wrong order. This is the most simplest algorithm and inefficient at the same time.",
    mergeDesc: "Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer. Merge sort repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.",
    quickDesc: "The name 'Quick Sort' comes from the fact that, quick sort is capable of sorting a list of data elements significantly faster (twice or thrice faster) than any of the common sorting algorithms. It is one of the most efficient sorting algorithms and is based on the splitting of an array (partition) into smaller ones and swapping (exchange) based on the comparison with 'pivot' element selected. Due to this, quick sort is also called as 'Partition Exchange' sort. Like Merge sort, Quick sort also falls into the category of divide and conquer approach of problem-solving methodology."
  }

  async function bubble (bars) {
    for (let i = 0; i < bars.length - 1; i++) {              // iterating through the length of the NodeList
      for (let j = 0; j < (bars.length - i - 1); j++) {      // iterating through the length of the NodeList MINUS the sorted bars
        bars[j].style.background = "#FF6D6A";                   // setting the two bars being compared to a different color
        bars[j + 1].style.background = "#FF6D6A";

        let bar1 = parseInt(bars[j].style.height);
        let bar2 = parseInt(bars[j + 1].style.height);

        if(bar1 > bar2) {
          await delay(500);                                 // hard coding a value of 250ms for the delay between comparisons
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

  async function mergeHelper (bars, min, max, middle) {
    const leftHalf = middle - min + 1;                      // defining the left half of the array
    const rightHalf = max - middle;                         // defining the right half of the array

    let left = new Array(leftHalf);                         // creating new array to contain the split up left half
    let right = new Array(rightHalf);                       // creating new array to contain the split up right half

    for (let i = 0; i < leftHalf; i++) {                    // iterating through left half and giving it a color
      await delay(250);                                     // hard coding a value of 250ms for the delay between comparisons

      bars[min + i].style.background = "#B1A2CA";
      left[i] = bars[min + i].style.height;                 // storing each height of the bars into left half
    };

    for (let i = 0; i < rightHalf; i++) {                   // iterating through right half and giving it a DIFFERENT color
      await delay(250);

      bars[middle + 1 + i].style.background = '#E9EC6B';
      right[i] = bars[middle + 1 + i].style.height;         // storing each height of the bars into right half
    };

    await delay(250);

    let i = 0, j = 0, k = min;

    while (i < leftHalf && j < rightHalf) {                // iterating through both arrays (as long as neither are empty) to "merge" the bars together
      await delay(250);

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
      await delay(250);
      bars[k].style.background = '#77DD77';
      bars[k].style.height = left[i];                     // left side merge
      i++;
      k++;
    };

    while (j < rightHalf) {                                // in case either array runs out, iterate through a singluar half to "merge" the bars to the main array
      await delay(250);
      bars[k].style.background = '#77DD77';
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
  mergeSortbutton.addEventListener("click", async function () {
    updateDesc("merge");
    const bars = document.querySelectorAll('.bar');
    disableButtons();
    await merge(bars, 0, bars.length - 1);
    sorted(bars);
    enableButtons();
  });

  async function partition (bars, left, right) {            // this particular implementation of partition is the Lomuto partition, using the last element as the pivot
    bars[right].style.background = "#E9EC6B";               // pivot bar

    let i = left - 1;                                       // index of smallest bar

    for (let j = left; j <= right - 1; j++) {
      bars[j].style.background = "#EFBE7D";                 // currently selected bar to compare to pivot

      await delay(250);                                     // hard coding a value of 100ms for the delay between comparisons

      if (parseInt(bars[j].style.height) <= parseInt(bars[right].style.height)) {   // checking for elements less or equal to the pivot
        i++;                                                // increment to the next bar
        swap(bars[i], bars[j]);

        bars[i].style.background = "#FF6D6A";               // color of the bars LESS than the pivot bar after swap

        if (i !== j) bars[j].style.background = "#B1A2CA";  // color of the bars MORE than the pivot bar after swap
        await delay(250);
      } else {
        bars[j].style.background = "#B1A2CA";               // color of the bars MORE than the pivot with no swap
      }
    }

    i++;
    await delay(250);

    swap(bars[i], bars[right]);

    bars[right].style.background = "#B1A2CA";               // ensuring bars MORE than the pivot are the same color
    bars[i].style.background = "lightgreen";                // coloring sorted pivot

    await delay(250);

    for (let k = 0; k < bars.length; k++) {
      if (bars[k].style.background !== "lightgreen")        //checking for sorted pivot color and then resetting the colors of all the other bars
        bars[k].style.background = "#8BD3E6";
    }

    return i;                                             // returning pivot index
  }

  async function quick (bars, left, right) {              // quick sort function to recursively call on main array
    if (left < right) {
      let pivot = await partition(bars, left, right);     // retrieving pivot index from partition helper function
      await quick(bars, left, pivot - 1);                 // recursive call on left half
      await quick(bars, pivot + 1, right);                // recursive call on right half
    }
  }

  function swap (bar1, bar2) {                            // basic swap function to switch bar heights
    let tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
  };

  const quickSortbtn = document.querySelector("#quick");
  quickSortbtn.addEventListener("click", async function () {
    updateDesc("quick");
    const bars = document.querySelectorAll(".bar");
    disableButtons();
    await quick(bars, 0, bars.length - 1);
    sorted(bars);
    enableButtons();
  });
});