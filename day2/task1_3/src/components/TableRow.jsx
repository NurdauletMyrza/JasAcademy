import React, {useState} from 'react';

const TableRow = (item) => {
    return (
        <tr className={(item.data.count < 5) ? "background_red" : ""}>
            <td>{item.index}</td>
            <td>{item.data.name}</td>
            <td>{item.data.price}</td>
            <td>{item.data.count}</td>
            <td>{item.data.instalment ? "✅" : ""}</td>
        </tr>
    );
};

export default TableRow;