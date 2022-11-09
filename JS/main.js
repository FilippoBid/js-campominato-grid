/* const startBtn = document.getElementById("startbtn");

let NSquare = 100;
let NRow = 10;
let NCol = 10;


startBtn.addEventListener("click", function () {
    
    for (i = 0; i < NSquare; i++) {
        
        const containerEl = document.querySelector(".container");
        const square = document.createElement("div");
        square.classList.add("squarestyle");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
        square.addEventListener("click",function(){
            this.classList.toggle("bg-danger")
            console.log(square.innerHTML);
        })
       
        square.style.width = `calc(100% / ${NCol})`
        square.innerHTML = `${i + 1}`
        containerEl.append(square);
        


    }





}) //esercizio senza bonus*/








/* let NSquare = 100;
let NRow = 10;
let NCol = 10; */
const startBtn = document.getElementById("startbtn");
const selectDEl = document.querySelector("select");

const containerEl = document.querySelector(".container");
/**
 * 
 * 
 * @param {number} selCol 
 * @param {number} containerSquare 
 * @return {Element}  
 */

function creaGrid (selCol,containerSquare){
    containerEl.innerHTML=""
    let NSquare;
    let NCol;
    
    
    if(selCol == "1"){
        NSquare = 100;
        NCol = 10;    
    }else if(selCol === "2"){
        NSquare = 81;
        NCol = 9;
    }else if(selCol === "3"){
        NSquare = 49;
        NCol = 7;
    }
    
    
    
    
    
    for (i = 0; i < NSquare; i++){
        let square = document.createElement("div");
        square.classList.add("squarestyle");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
        square.addEventListener("click",function(){
            this.classList.toggle("bg-danger")
            console.log(square.innerHTML);
        })
        
        square.style.width = `calc(100% / ${NCol})`
        square.innerHTML = `${i + 1}`
        containerSquare.append(square);
    }
    
    
    
    
    
    
}




startBtn.addEventListener("click", function(){
    const selectD = selectDEl.value;
    creaGrid (selectD,containerEl);
    console.log(selectDEl);
    console.log(selectD);
});




