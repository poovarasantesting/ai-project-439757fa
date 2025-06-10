import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Plus, 
  Minus, 
  X, 
  Divide, 
  Equal, 
  Delete,
  RotateCcw
} from "lucide-react";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  
  function inputDigit(digit: string) {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  }
  
  function inputDecimal() {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }
    
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }
  
  function clear() {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  }
  
  function deleteLastDigit() {
    if (display.length > 1) {
      setDisplay(display.substring(0, display.length - 1));
    } else {
      setDisplay("0");
    }
  }
  
  function handleOperator(nextOperator: string) {
    const inputValue = parseFloat(display);
    
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }
    
    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  }
  
  function performCalculation() {
    const inputValue = parseFloat(display);
    
    if (firstOperand === null || operator === null) {
      return inputValue;
    }
    
    let result = 0;
    switch (operator) {
      case "+":
        result = firstOperand + inputValue;
        break;
      case "-":
        result = firstOperand - inputValue;
        break;
      case "*":
        result = firstOperand * inputValue;
        break;
      case "/":
        result = firstOperand / inputValue;
        break;
      default:
        return inputValue;
    }
    
    return Math.round(result * 1000000) / 1000000; // Handle floating point precision
  }
  
  function handleEquals() {
    if (firstOperand === null || operator === null) {
      return;
    }
    
    const result = performCalculation();
    setDisplay(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(false);
  }
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs">
      <div className="mb-4">
        <Input 
          value={display} 
          readOnly 
          className="text-right text-2xl h-14 font-mono" 
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <Button 
          variant="outline" 
          onClick={() => clear()}
          className="col-span-2"
        >
          <RotateCcw className="mr-1 h-4 w-4" /> Clear
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => deleteLastDigit()}
          className="col-span-2"
        >
          <Delete className="mr-1 h-4 w-4" /> Delete
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("7")}
        >
          7
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("8")}
        >
          8
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("9")}
        >
          9
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={() => handleOperator("/")}
        >
          <Divide className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("4")}
        >
          4
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("5")}
        >
          5
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("6")}
        >
          6
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={() => handleOperator("*")}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("1")}
        >
          1
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("2")}
        >
          2
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("3")}
        >
          3
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={() => handleOperator("-")}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDigit("0")}
        >
          0
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => inputDecimal()}
        >
          .
        </Button>
        
        <Button 
          variant="primary" 
          onClick={() => handleEquals()}
        >
          <Equal className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="secondary" 
          onClick={() => handleOperator("+")}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}