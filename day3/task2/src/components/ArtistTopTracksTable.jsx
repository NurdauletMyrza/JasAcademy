import React from 'react';
import TrackTableRow from "./TrackTableRow";

const ArtistTopTracksTable = ({ tracks }) => {
    try {
        return (
            <div className="TracksTable">
                <table style={{
                    width: "800px",
                    margin: "10px",
                    borderCollapse: "collapse"
                }}>
                    <thead>
                    <tr style={{
                        letterSpacing: "0.4px",
                        color: "#808080",
                        textAlign: "left"
                    }}>
                        <th style={{ width: "5%" }}> </th>
                        <th style={{
                            fontWeight: 400,
                            width: "40%",
                            padding: "10px 0"
                        }}>Песня</th>
                        <th style={{
                            fontWeight: 400,
                            width: "30%"
                        }}>Артист</th>
                        <th style={{
                            fontWeight: 400,
                            width: "20%"
                        }}>Альбом</th>
                        <th style={{ width: "5%" }}> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {tracks.map((track, index) =>
                        <TrackTableRow track={track} isOdd={index%2===0} key={track.key}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    } catch (error) {
        console.log("error", error);
    }
};

export default ArtistTopTracksTable;