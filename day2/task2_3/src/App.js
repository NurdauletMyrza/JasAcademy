import './App.css';
import {useState} from "react";

function App() {
    const [result, setResult] = useState("");

    function calculate(event) {
        let text = event.target.value;
        if (text.includes("+") || text.includes("-") || text.includes("*") || text.includes("/")) {
            let numB = 0;
            let numA = 0;
            let isValid = true;
            let count = 0;
            let operation = '';
            for (let i = 0; i < text.length; i++) {
                let ch = text.charAt(i)
                if ('0' <= ch && ch <= '9') {
                    numB = numB * 10 + parseInt(ch);
                } else if ((ch === '+' || ch === '-' || ch === '*' || ch === '/') && count === 0) {
                    numA = numB;
                    numB = 0;
                    count += 1;
                    operation = ch;
                } else if ((ch === '+' || ch === '-' || ch === '*' || ch === '/') && count === 1) {
                    isValid = false;
                    setResult("Только одну операцию");
                    break;
                } else if (ch === ' ') {
                } else {
                    isValid = false;
                    setResult("Неверное выражение");
                    break;
                }
            }
            if (isValid) {
                let result;
                switch (operation) {
                    case '+':
                        result = numA + numB;
                        break;
                    case '-':
                        result = numA - numB;
                        break;
                    case '*':
                        result = numA * numB;
                        break;
                    case '/':
                        if (numB === 0) {
                            result = "Ответ: Число не делится на ноль";
                            break;
                        }
                        result = numA / numB;
                        break;
                    default:
                        result = 0;
                }
                setResult("=" + result);
            }
        } else {
            setResult("");
        }
    }
  return (
    <div className="App">
      <input type="text" onChange={(event) => calculate(event)}>{}</input><span>{result}</span>
    </div>
  );
}

export default App;
