let newLine = true;//Determines if the next typed button will be included in the new line.
let value1;
let currentOperator;

//When any digit buttons are pressed.
function digitBtnPressed(button){
    if(newLine){
        document.getElementById("inputBox").value = button;
        newLine = false;
    }
    else{
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

//When the AC button is clicked.
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;//True here means, after this operation a new line will occur.
}

//For the operator buttons(+,-,x).
function operatorBtnPressed(operator) {
    currentOperator = operatorBtnPressed;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}