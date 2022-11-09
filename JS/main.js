const startBtn = document.getElementById("startbtn");
const containerEl = document.querySelector(".container");

let NSquare = 100;
let NRow = 10;
let NCol = 10;


startBtn.addEventListener("click", function () {
    
    for (i = 0; i < NSquare; i++) {

        const square = document.createElement("div");
        square.classList.add("squarestyle");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
       
        square.style.width = `calc(100% / ${NCol})`
        square.innerHTML = `${i + 1}`
        containerEl.append(square);


    }





})