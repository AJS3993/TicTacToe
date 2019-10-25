
/*----- constants -----*/



/*----- app's state (variables) -----*/

let turnNum = 0;

let xArray = [];
let oArray = [];



/*----- cached element references -----*/

const A1Box = document.getElementById('A1');
const A2Box = document.getElementById('A2');
const A3Box = document.getElementById('A3');

const B1Box = document.getElementById('B1');
const B2Box = document.getElementById('B2');
const B3Box = document.getElementById('B3');

const C1Box = document.getElementById('C1');
const C2Box = document.getElementById('C2');
const C3Box = document.getElementById('C3');

/*----- event listeners -----*/

A1Box.addEventListener("click", play);
A2Box.addEventListener("click", play);
A3Box.addEventListener("click", play);

B1Box.addEventListener("click", play);
B2Box.addEventListener("click", play);
B3Box.addEventListener("click", play);

C1Box.addEventListener("click", play);
C2Box.addEventListener("click", play);
C3Box.addEventListener("click", play);


/*----- functions -----*/

function play(){
    if (this.className == "played"){
        return
    }
    turnNum += 1;
    if (turnNum%2 == 0){
        this.textContent = "O"
    }
    if (turnNum%2 == 1){
        this.textContent = "X"
        }
        this.className = "played"
    return;
};

function render(){

}