# SAV - Sorting Algorithm Visualizer

SAV is an interactive web app dedicated to helping users visualize popular sorting algorithms (currently bubble sort, merge sort, quick sort). This web app serves to provide users a brief overview of the difference in approach and performance across different sorting algorithms.

## Technologies Used

SAV was implemented using purely vanilla Javascript, HTML5, and CSS3.
## Key Features

### Random Data Generation

Interactive graph that can render completely random data whenever the user chooses to do so. The amount of data can also be adjusted using a slider to either scale up or down the amount of bars rendered.

<div align="center">
  <img src="src/assets/render.gif" />
</div>

```js
  generateArray (amount) {
    this.deleteArray();
    const newArray = [];

    for (let i = 0; i < amount; i++) {
      newArray.push(this.getRandomInt(5, 100))
    };

    return newArray;
  };

  render (array) {
    const graph = document.querySelector(".graph");

    for (let i = 0; i < array.length; i++) {
      const bar = document.createElement("div");

      bar.classList.add("bar");
      bar.style.height = `${array[i] * Math.PI}px`;

      graph.appendChild(bar);
    };
  };
```
