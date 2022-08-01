
const containerGrid = document.querySelector(".container-grid");


for(let i = 0; i < 16; i++){

    const div = document.createElement("div");
    div.classList.add("row");

    for(let i = 0; i < 16; i++){

    const square = document.createElement("div");
    square.classList.add("square");
    div.appendChild(square);

    }


containerGrid.appendChild(div);


}