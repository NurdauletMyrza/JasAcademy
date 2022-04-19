import React from 'react';

const ArtistTableRow = ({ artist, isOdd }) => {
    return (
        <tr style={{ background: isOdd ? "#FAFAFA" : "#FFF" }}>
            <td><img src={artist.avatar} alt="image" style={{
                width: "34px",
                height: "34px",
                borderRadius: "5px",
                margin: "2px 0"
            }}/></td>
            <td style={{ letterSpacing: "-0.2px" }}>{ artist.name }</td>
            <td><a href={artist.weburl} target="_blank" style={{
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

export default ArtistTableRow;