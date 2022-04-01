import './App.css';
import TableRow from "./components/TableRow";
import React, {useState} from "react";

function App() {
    const data = require("./data.js").tableData;
    const [test, setTest] = useState(0);
    const [priceStr, setPriceStr] = useState("Цена");
    const [countStr, setCountStr] = useState("Количество");
    let count = 0;
    let array = [];
    for (let i = 0; i < data.length; i++) {
        array.push(true);
    }
    const [filterList, setFilterList] = useState(array);

    function sortPrice() {
        let direction = 0;
        let value = "Цена";
        if (priceStr === "Цена") {
            direction = 1;
            value = "Цена↑";
        } else if (priceStr === "Цена↑") {
            direction = -1;
            value = "Цена↓";
        }
        if (direction === 0) {
            data.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        } else {
            data.sort(function (a, b) {
                if (getNumber(a.price) > getNumber(b.price)) {
                    return direction;
                }
                if (getNumber(a.price) < getNumber(b.price)) {
                    return -direction;
                }
                return 0;
            });
        }
        setPriceStr(value);
        setCountStr("Количество");
        return 0;
    }

    function sortCount() {
        let value = "Количество";
        let direction = 0;
        if (countStr === "Количество") {
            direction = 1;
            value = "Количество↑";
        } else if (countStr === "Количество↑") {
            direction = -1;
            value = "Количество↓";
        }
        if (direction === 0) {
            data.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        } else {
            data.sort(function (a, b) {
                if (a.count > b.count) {
                    return direction;
                }
                if (a.count < b.count) {
                    return -direction;
                }
                return 0;
            });
        }
        setCountStr(value);
        setPriceStr("Цена");
        return 0;
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

    function getValid(item) {
        if (filterList[item.id - 1]) {
            return (<TableRow data={item} index={++count} key={item.id}/>);
        }
        return 0;
    }

    function filterInstalment(event) {
        if (event.target.checked) {
            data.map((item) => {
                if (!item.instalment) {
                    filterList[item.id - 1] = false;
                }
            });
        } else {
            data.map((item) => {
                if (!item.instalment) {
                    let ch2 = document.getElementById("ch2");
                    if (ch2.checked) {
                        if (item.count > 0) {
                            filterList[item.id - 1] = true;
                        }
                    } else {
                        filterList[item.id - 1] = true;
                    }
                }
            });
        }
        setFilterList(filterList);
        setTest(test+1);
        return 0;
    }

    function filterCount(event) {
        if (event.target.checked) {
            data.map((item) => {
                if (item.count < 1) {
                    filterList[item.id - 1] = false;
                }
            });
        } else {
            data.map((item) => {
                if (item.count < 1) {
                    let ch1 = document.getElementById("ch1");
                    if (ch1.checked) {
                        if (item.instalment ) {
                            filterList[item.id - 1] = true;
                        }
                    } else {
                        filterList[item.id - 1] = true;
                    }
                }
            });
        }
        setFilterList(filterList);
        setTest(test+1);
        return 0;
    }

    return (
        <div className="App">
            <div className="checkboxes">
                <input type="checkbox" id="ch1" onChange={(event) => filterInstalment(event)}/>
                <label htmlFor="ch1">Только в рассрочку</label>
                <input type="checkbox" id="ch2" onChange={(event) => filterCount(event)}/>
                <label htmlFor="ch2">Есть в наличии</label>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th onClick={sortPrice}>{priceStr}</th>
                        <th onClick={sortCount}>{countStr}</th>
                        <th>В рассрочку</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => getValid(item))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
