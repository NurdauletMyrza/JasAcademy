import React from 'react';

const TrackTableRow = ({ track, isOdd }) => {
    return (
        <tr style={{ background: isOdd ? "#FAFAFA" : "#FFF" }}>
            <td><img src={track.images.background} alt="image not found" style={{
                width: "34px",
                height: "34px",
                borderRadius: "5px",
                margin: "2px 0"
            }}/></td>
            <td style={{ letterSpacing: "-0.2px" }}>{track.title}</td>
            <td style={{
                fontSize: "12px",
                color: "#7E7E7E"
            }}>{track.subtitle}</td>
            <td style={{
                fontSize: "12px",
                color: "#7E7E7E"
            }}>{track.title}</td>
            <td><a href={track.url} target="_blank" style={{
                width: "60px",
                height: "20px",
                border: "1px solid #7E7E7E",
                borderRadius: "4px",
                color: "#7E7E7E",
                textDecoration: "none",
                fontSize: "12px",
                padding: "4px 12px"
            }}>Shazam</a></td>
        </tr>
    );
};

export default TrackTableRow;

