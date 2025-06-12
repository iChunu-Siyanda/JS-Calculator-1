//VARR: Variable, Action, Result, and Reset.
var newLine = true;//Determines if the next typed button will be included in the new line.
var value1;
var currentOperator;

//When any digit buttons are pressed.
function digitBtnPressed(button){
    if(newLine){
        document.getElementById("inputBox").value = button;
        newLine = false;
    }
    else{
        var currentValue = document.getElementById("inputBox").value;
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
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

//For the equals button(=).
function equalBtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value );
    var totalFinal;
    switch (currentOperator) {
        case "+":
            totalFinal = value1 + value2;
            break;
        case "-":
            totalFinal = value1 - value2;
            break;
        case "/":
            totalFinal = value1 / value2;
            break;
        case "x":
            totalFinal = value1 * value2;
            break;
    }
    document.getElementById("inputBox").value = totalFinal;
    newLine = true;
}
