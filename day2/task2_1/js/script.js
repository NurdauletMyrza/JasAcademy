let body = document.getElementById("body");
let firstInputBlock = document.createElement("div");
let secondInputBlock = document.createElement("div");
let buttonsBlock = document.createElement("div");
let labelA = document.createElement("label");
let labelB = document.createElement("label");
labelA.for="inputA";
labelB.for="inputB";
labelA.innerHTML="A:";
labelB.innerHTML="B:";
let inputA = document.createElement("input");
let inputB = document.createElement("input");
inputA.type = "text";
inputB.type = "text";
inputA.id = "inputA";
inputB.id = "inputB";
let buttonPlus = document.createElement("div");
let buttonMinus = document.createElement("div");
let buttonMultiply = document.createElement("div");
let buttonDivide = document.createElement("div");
buttonPlus.className = "btn";
buttonMinus.className = "btn";
buttonMultiply.className = "btn";
buttonDivide.className = "btn";
buttonPlus.innerHTML = "+";
buttonMinus.innerHTML = "-";
buttonMultiply.innerHTML = "*";
buttonDivide.innerHTML = "/";
let p = document.createElement("p");
p.innerHTML = "empty";


body.appendChild(firstInputBlock);
body.appendChild(secondInputBlock);
body.appendChild(buttonsBlock);
body.appendChild(p);
firstInputBlock.appendChild(labelA);
firstInputBlock.appendChild(inputA);
secondInputBlock.appendChild(labelB);
secondInputBlock.appendChild(inputB);
buttonsBlock.appendChild(buttonPlus);
buttonsBlock.appendChild(buttonMinus);
buttonsBlock.appendChild(buttonMultiply);
buttonsBlock.appendChild(buttonDivide);

buttonPlus.onclick = function () {
    let numB = inputB.value;
    let numA = inputA.value;
    let result = +numA + +numB;
    if (result || result === 0) {
        p.innerHTML = "Ответ: " + (+numA) + " + " + (+numB) + " = " + result;
    } else {
        p.innerHTML = "Неверный ввод";
    }
    return 0;
}

buttonMinus.onclick = function () {
    let numB = inputB.value;
    let numA = inputA.value;
    let result = +numA - +numB;
    if (result || result === 0) {
        p.innerHTML = "Ответ: " + (+numA) + " - " + (+numB) + " = " + result;
    } else {
        p.innerHTML = "Неверный ввод";
    }
    return 0;
}

buttonMultiply.onclick = function () {
    let numB = inputB.value;
    let numA = inputA.value;
    let result = +numA * +numB;
    if (result || result === 0) {
        p.innerHTML = "Ответ: " + (+numA) + " * " + (+numB) + " = " + result;
    } else {
        p.innerHTML = "Неверный ввод";
    }
    return 0;
}

buttonDivide.onclick = function () {
    let numB = inputB.value;
    let numA = inputA.value;
    if (numB === "0") {
        p.innerHTML = "Ответ: Число не делится на ноль";
        return 0;
    }
    let result = +numA / +numB;
    if (result || result === 0) {
        p.innerHTML = "Ответ: " + (+numA) + " / " + (+numB) + " = " + result;
    } else {
        p.innerHTML = "Неверный ввод";
    }
    return 0;
}