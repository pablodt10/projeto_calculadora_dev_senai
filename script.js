class Calculator {
    constructor(){
        this.displayValue = "";
    }

    appendToDisplay(value){
        this.displayValue += value;
        this.updateDisplay()
    }


    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay()
    }
    calculate(){
        try{
            const result = eval(this.displayValue);
            this.displayValue = result;
            this.updateDisplay()
        } catch(error){
            this.displayValue = "Error";
            this.updateDisplay()
        }
    }
}   

const calc = new Calculator()