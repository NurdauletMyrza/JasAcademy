import React from 'react';
import ArtistTableRow from "./ArtistTableRow";

const HitArtistsTable = ({ hitArtists }) => {
    return (
        <div className="HitArtists">
            <table style={{
                width: "400px",
                margin: "10px",
                borderCollapse: "collapse"
            }}>
                <thead>
                <tr style={{
                    letterSpacing: "0.4px",
                    color: "#808080",
                    textAlign: "left"
                }}>
                    <th style={{ width: "10%" }}> </th>
                    <th style={{
                        fontWeight: 400,
                        width: "80%",
                        padding: "10px 0"
                    }}>Имя Артиста</th>
                    <th style={{ width: "10%" }}> </th>
                </tr>
                </thead>
                <tbody>
                {hitArtists.map((artist, index) =>
                    <ArtistTableRow artist={artist.artist} isOdd={index%2===0} key={artist.artist.id}/>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default HitArtistsTable;