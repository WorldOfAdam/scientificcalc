import React, { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  function inputDigit(digit) {
    setDisplayValue(prevValue => {
      if (prevValue === "0") {
        return digit;
      } else {
        return prevValue + digit;
      }
    });
  }

  function inputDecimal() {
    setDisplayValue(prevValue => {
      if (!prevValue.includes(".")) {
        return prevValue + ".";
      } else {
        return prevValue;
      }
    });
  }

  function clearDisplay() {
    setDisplayValue("0");
  }

  function performOperation(operator) {
    // Perform the operation based on the current displayValue and operator
    // and update the displayValue state.
  }

  return (
    <div>
      <div>{displayValue}</div>
      <button onClick={() => inputDigit("7")}>7</button>
      <button onClick={() => inputDigit("8")}>8</button>
      <button onClick={() => inputDigit("9")}>9</button>
      <button onClick={() => performOperation("/")}>/</button>
      <button onClick={() => inputDigit("4")}>4</button>
      <button onClick={() => inputDigit("5")}>5</button>
      <button onClick={() => inputDigit("6")}>6</button>
      <button onClick={() => performOperation("*")}>*</button>
      <button onClick={() => inputDigit("1")}>1</button>
      <button onClick={() => inputDigit("2")}>2</button>
      <button onClick={() => inputDigit("3")}>3</button>
      <button onClick={() => performOperation("-")}>-</button>
      <button onClick={() => inputDigit("0")}>0</button>
      <button onClick={() => inputDecimal(".")}>.</button>
      <button onClick={() => performOperation("+")}>+</button>
      <button onClick={() => clearDisplay()}>AC</button>
      <button>=</button>
    </div>
  );
}

export default Calculator;