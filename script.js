let containerGrid = document.querySelector(".container-grid");
const slider = document.querySelector("#slider");
const label = document.querySelector("#sliderLabel");
let color = document.querySelector("#color");

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




slider.addEventListener("input", function () {
  changeGrid(slider.value);
});
color.addEventListener("input", function () {
    hover();
  });
  



function hover(){
    
    let style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
    .square:hover {
        background-color:` + color.value + `
    }
;`
    
    document.head.appendChild(style);
}

function changeGrid() {
  label.textContent = slider.value + " x " + slider.value;
  containerGrid.innerHTML = "";
  containerGrid = createGrid(slider.value);
}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.classList.add("row");

    for (let i = 0; i < num; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      div.appendChild(square);
    }

    containerGrid.appendChild(div);
  }

  const squares = document.querySelectorAll(".square");

  for (let square of squares) {
    square.addEventListener("mouseenter", function (event) {
      if (mouseDown === true) {
        square.style.backgroundColor = color.value;
      }
    });

    square.addEventListener("click", function (event) {
      square.style.backgroundColor = color.value;
    });


  }

  hover();

  return containerGrid;
}
