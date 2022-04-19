import React, {useEffect, useState} from 'react';
import HitTracksTable from "./HitTracksTable";
import HitArtistsTable from "./HitArtistsTable";

const ShazamSearchApp = () => {
    const [shazamData, setShazamData] = useState({});

    useEffect(() => {
        const url = 'https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': 'd00af62430msh903251d219368cep1d1427jsnb36c11776085'
            }
        };
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setShazamData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    try {
        return (
            <div className="SearchApp" style={{
                fontFamily: "Ubuntu",
                lineHeight: "100%",
                fontSize: "14px",
                fontWeight: 400
            }}>
                <h1>Hit Tracks List</h1>
                <HitTracksTable hitTracks={shazamData.tracks.hits}/>
                <br/>
                <br/>
                <br/>
                <h1>Hit Artists List</h1>
                <HitArtistsTable hitArtists={shazamData.artists.hits}/>
            </div>
        );
    } catch (error) {
        console.log("error", error);
    }
};

export default ShazamSearchApp;