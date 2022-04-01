let body = document.getElementById("body");
let label = document.createElement("label");
label.for="textInput";
label.innerHTML="";
let input = document.createElement("input");
input.type = "text";
input.id = "textInput";

body.appendChild(input);
body.appendChild(label);

input.onchange = (event) => {
    console
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
                label.innerHTML = "Только одну операцию";
                break;
            } else if (ch === ' ') {
                continue;
            } else {
                isValid = false;
                label.innerHTML = "Неверное выражение";
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
            label.innerHTML = "=" + result;
        }
    } else {
        label.innerHTML = "";
    }
};
function getNumber(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if ('0' <= ch && ch <= '9') {
            result = result * 10 + parseInt(ch);
        }
    }
    return result;
}