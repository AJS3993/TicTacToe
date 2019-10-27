
/*----- constants -----*/

let win1 = [A1, A2, A3];
let win2 = [B1, B2, B3]; 
let win3 = [C1, C2, C3];
let win4 = [A1, B1, C1];
let win5 = [A2, B2, C2];
let win6 = [A3, B3, C3];
let win7 = [A1, B2, C3];
let win8 = [A3, B2, C1];


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
    if (this.className == "oplayed"){
        return
    }
    if (this.className == "xplayed"){
        return
    }
    turnNum += 1;
    if (turnNum%2 == 0){
        this.textContent = "O"
        oArray.push(this.id)
        this.className = "oplayed"
    }
    if (turnNum%2 == 1){
        this.textContent = "X"
        xArray.push(this.id)
        this.className = "xplayed"
    }
        render()
        return;
    }
    


function render(){
    if (xArray.includes('A1')){
        if (xArray.includes('A2')){
            if (xArray.includes('A3')){ 
                alert('x wins') 
            }  
        }
    }
    
    if (xArray.includes('B1')){
        if (xArray.includes('B2')){
            if (xArray.includes('B3')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('C1')){
        if (xArray.includes('C2')){
            if (xArray.includes('C3')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('A1')){
        if (xArray.includes('B1')){
            if (xArray.includes('C1')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('A2')){
        if (xArray.includes('B2')){
            if (xArray.includes('C2')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('A3')){
        if (xArray.includes('B3')){
            if (xArray.includes('C3')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('A1')){
        if (xArray.includes('B2')){
            if (xArray.includes('C3')){ 
                alert('x wins') 
            }  
        }
    }

    if (xArray.includes('A3')){
        if (xArray.includes('B2')){
            if (xArray.includes('C1')){ 
                alert('x wins') 
            }  
        }
    }

///////////////


if (oArray.includes('A1')){
    if (oArray.includes('A2')){
        if (oArray.includes('A3')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('B1')){
    if (oArray.includes('B2')){
        if (oArray.includes('B3')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('C1')){
    if (oArray.includes('C2')){
        if (oArray.includes('C3')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('A1')){
    if (oArray.includes('B1')){
        if (oArray.includes('C1')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('A2')){
    if (oArray.includes('B2')){
        if (oArray.includes('C2')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('A3')){
    if (oArray.includes('B3')){
        if (oArray.includes('C3')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('A1')){
    if (oArray.includes('B2')){
        if (oArray.includes('C3')){ 
            alert('o wins') 
        }  
    }
}

if (oArray.includes('A3')){
    if (oArray.includes('B2')){
        if (oArray.includes('C1')){ 
            alert('o wins') 
        }  
    }
}


}

