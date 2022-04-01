let body = document.getElementById("body");
let box = document.createElement('div');
let checkbox1 = document.createElement('input');
let label1 = document.createElement('label');
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let thead_row = document.createElement('tr');

let h_data_1 = document.createElement('th');
let h_data_2 = document.createElement('th');
let h_data_3 = document.createElement('th');
let h_data_4 = document.createElement('th');
let h_data_5 = document.createElement('th');

h_data_1.innerHTML = "№";
h_data_2.innerHTML = "Название";
h_data_3.innerHTML = "Цена";
h_data_4.innerHTML = "Количество";
h_data_5.innerHTML = "В рассрочку";

box.id = "checkboxes";
checkbox1.type = "checkbox";
checkbox1.id = "ch1";
checkbox1.name = "name1";
checkbox1.value = "value1";
label1.for = "ch1";
label1.innerHTML = "Только в рассрочку";

body.appendChild(box);
box.appendChild(checkbox1);
box.appendChild(label1);
body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(thead_row);
thead_row.appendChild(h_data_1);
thead_row.appendChild(h_data_2);
thead_row.appendChild(h_data_3);
thead_row.appendChild(h_data_4);
thead_row.appendChild(h_data_5);

const filter_array = Array.from(tableData, x => true);

checkbox1.onclick = function () {
    if (this.checked) {
        for (let i = 0; i < tableData.length; i++) {
            if (!filter_array[i]) {
                continue;
            }
            filter_array[i] = tableData[i].instalment;
        }
    } else {
        for (let i = 0; i < tableData.length; i++) {
            if (filter_array[i] === true) {
                continue;
            }
            filter_array[i] = true;
        }
    }
    clearTable();
    displayTable();
}

h_data_3.onclick = function () {
    if (h_data_3.innerHTML === "Цена") {
        sortData("price");
        h_data_3.innerHTML = "Цена↑";
    } else if (h_data_3.innerHTML === "Цена↑") {
        reverseData();
        h_data_3.innerHTML = "Цена↓";
    } else {
        sortData("id");
        h_data_3.innerHTML = "Цена";
    }
    h_data_4.innerHTML = "Количество";
    clearTable();
    displayTable();
}

h_data_4.onclick = function () {
    if (h_data_4.innerHTML === "Количество") {
        sortData("count");
        h_data_4.innerHTML = "Количество↑";
    } else if (h_data_4.innerHTML === "Количество↑") {
        reverseData();
        h_data_4.innerHTML = "Количество↓";
    } else {
        sortData("id");
        h_data_4.innerHTML = "Количество";
    }
    h_data_3.innerHTML = "Цена";
    clearTable();
    displayTable();
}

function clearTable() {
    let rows = tbody.rows;
    while (rows.length !== 0) {
        rows[0].remove();
    }
}

function displayTable() {
    let count = 1;
    for (let i = 0; i < tableData.length; i++) {
        if (filter_array[i] === false) {
            continue;
        }
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td')
        let row_data_2 = document.createElement('td')
        let row_data_3 = document.createElement('td')
        let row_data_4 = document.createElement('td')
        let row_data_5 = document.createElement('td')

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        row.appendChild(row_data_4);
        row.appendChild(row_data_5);

        tbody.appendChild(row);

        row.className = "tr_" + i;

        row_data_1.innerHTML = count;
        row_data_2.innerHTML = tableData[i].name;
        row_data_3.innerHTML = tableData[i].price;
        row_data_4.innerHTML = tableData[i].count === 0 ? "Нет в наличии" : tableData[i].count;
        row_data_5.innerHTML = tableData[i].instalment ? "✅" : "";
        count++;
    }
}

function sortData(byKey) {
    for (let i = 0; i < tableData.length - 1; i++) {
        let min = tableData[i][byKey];
        if (byKey === "price") {
            min = getNumber(min);
        }
        let min_i = i;
        for (let j = i + 1; j < tableData.length; j++) {
            let temp = tableData[j][byKey];
            if (byKey === "price") {
                temp = getNumber(temp);
            }
            if (min > temp) {
                min = temp;
                min_i = j;
            }
        }
        let temp = tableData[i];
        tableData[i] = tableData[min_i];
        tableData[min_i] = temp;
        if (filter_array[i] !== filter_array[min_i]) {
            filter_array[i] = !filter_array[i];
            filter_array[min_i] = !filter_array[min_i];
        }
    }
}

function reverseData() {
    for (let i = 0; i < tableData.length / 2 - 1; i++) {
        let temp = tableData[i];
        tableData[i] = tableData[tableData.length - 1 - i];
        tableData[tableData.length - 1 - i] = temp;
        if (filter_array[i] !== filter_array[tableData.length - 1 - i]) {
            filter_array[i] = !filter_array[i];
            filter_array[tableData.length - 1 - i] = !filter_array[tableData.length - 1 - i];
        }
    }
}

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

displayTable();
