let body = document.getElementById("body");
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

body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(thead_row);
thead_row.appendChild(h_data_1);
thead_row.appendChild(h_data_2);
thead_row.appendChild(h_data_3);
thead_row.appendChild(h_data_4);
thead_row.appendChild(h_data_5);

function displayTable() {
    console.log("run display");
    let count = 1;
    for (let i = 0; i < tableData.length; i++) {
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
        row_data_4.innerHTML = tableData[i].count;
        row_data_5.innerHTML = tableData[i].instalment ? "✅" : "";
        count++;
    }
}

displayTable();
