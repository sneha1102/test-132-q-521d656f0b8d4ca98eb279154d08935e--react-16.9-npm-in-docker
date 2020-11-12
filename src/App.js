import React from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [expression, setExpression] = React.useState("0");
  const [status, setStatus] = React.useState(false);
  const handleClick = function (value) {
    if (expression !== "Math Error") {
      let newExpression;
      if (status === false) {
        newExpression = value;
        let st1 = true;
        setStatus(st1);
      } else {
        newExpression = expression.toString() + value;
      }
      setExpression(newExpression);
    }
  };

  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      if (
        result === Infinity ||
        result === -Infinity ||
        result.toString() === "NaN"
      ) {
        setExpression("Math Error");
      } else if (result === 0) {
        setExpression("0");
      } else {
        setExpression(result.toString());
      }
    } catch (ex) {
      setExpression("Math Error");
    }
  };
  const clear = function () {
    setExpression("0");
    setStatus(false);
  };
  const deletefxn = function () {
    if (expression !== "Math Error") {
      if (expression.length === 1) {
        setExpression("0");
        setStatus(false);
      } else {
        let exp = expression.slice(0, expression.length - 1);
        setExpression(exp);
      }
    }
  };

  return (
    <div className="App">
      <h2 id="heading">Simple Calculator</h2>
      <div id="result">{expression}</div>
      <div id="buttons">
        <div>
          <button className="btn" id="clear" onClick={clear}>
            AC
          </button>
          <button className="btn" id="delete" onClick={deletefxn}>
            delete
          </button>
          <button className="operatorequals" id="equal" onClick={calculate}>
            =
          </button>
          <button
            className="operator"
            id="divide"
            onClick={() => handleClick("/")}
          >
            /
          </button>
        </div>
        <div>
          <button className="btn" id="7" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" id="8" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" id="9" onClick={() => handleClick("9")}>
            9
          </button>
          <button
            className="operator"
            id="multiply"
            onClick={() => handleClick("*")}
          >
            *
          </button>
        </div>
        <div>
          <button className="btn" id="4" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" id="5" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" id="6" onClick={() => handleClick("6")}>
            6
          </button>
          <button
            className="operator"
            id="subtract"
            onClick={() => handleClick("-")}
          >
            -
          </button>
        </div>
        <div>
          <button className="btn" id="1" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" id="2" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" id="3" onClick={() => handleClick("3")}>
            3
          </button>

          <button
            className="operator"
            id="add"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>
        <div>
          <button className="btn0" id="1=0" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btndot" id="dot" onClick={() => handleClick(".")}>
            .
          </button>

          <button
            className="operator"
            id="percentile"
            onClick={() => handleClick("%")}
          >
            %
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
