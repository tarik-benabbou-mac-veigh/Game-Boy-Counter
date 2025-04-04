// My variables :
const counter = document.querySelector('#counter');
const lowLimit = document.querySelector('#lowLimit');
const highLimit = document.querySelector('#highLimit');
const inputDec = document.querySelector('#inputDec');
const inputInc = document.querySelector('#inputInc');
const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const resetButton = document.querySelector('#resetButton');

let clickNumber = 0;

// --- FUNCTIONS --- :
/* Incrementation */
function incrementation(){
    clickNumber = clickNumber + Number(inputInc.value);

    /* Test for the highLimit value :*/
    let highNumber = Number(highLimit.value);
    if(clickNumber > highNumber){
        clickNumber = highNumber;
    }
    /* Test for the lowLimit value :*/
    let lowNumber = Number(lowLimit.value);
    if(clickNumber < lowNumber){
        clickNumber = lowNumber;
    }
    counter.textContent = clickNumber;
}

/* Incrementation */
function decrementation(){
    clickNumber = clickNumber - inputDec.value;
    
    /* Test for the lowLimit value :*/
    let lowNumber = Number(lowLimit.value);
    if(clickNumber < lowNumber){
        clickNumber = lowNumber;
    } 
    /* Test for the highLimit value :*/
    let highNumber = Number(highLimit.value);
    if(clickNumber > highNumber){
        clickNumber = highNumber;
    }
    
    counter.textContent = clickNumber;
}

// --- BUTTONS --- :
/* Button "+" */
plusButton.addEventListener('click', ()=>{
    incrementation();
})

/* Button "-" */
minusButton.addEventListener('click', ()=>{
    decrementation();
})

/* Button "Reset" */
resetButton.addEventListener('click', ()=>{
    clickNumber = 0;
    counter.textContent = clickNumber;
})

