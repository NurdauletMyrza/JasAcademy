import React from 'react';

const TimeAndDate = ({ created }) => {
    const date = new Date(created);
    return (
        <div className="date" style={{
            fontFamily: 'Work Sans',
            // fontStyle: "normal",
            // fontWeight: 400,
            fontSize: "12px",
            lineHeight: "14px",
            // textAlign: "right",
            letterSpacing: "-0.02em",
            color: "#9D9D9D"
        }}>
            { date.getHours() + ":" + ((date.getMinutes() < 10) ? (" " + date.getMinutes()) : date.getMinutes()) +
            " " + date.getDate() + "." +
            (((1 + date.getMonth() + "").length === 1) ? ("0" + (1 + date.getMonth())) : (1 + date.getMonth())) +
            "." + (date.getFullYear()) }
        </div>
    );
};

export default TimeAndDate;
