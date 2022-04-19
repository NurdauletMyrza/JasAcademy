import React, {useEffect, useState} from 'react';
import ArtistTopTracksTable from "./ArtistTopTracksTable";

const ShazamArtistTopTracks = () => {
    const [shazamData, setShazamData] = useState({});

    useEffect(() => {
        const url = 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US';

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
            <div className="ArtistTopTracks" style={{
                fontFamily: "Ubuntu",
                lineHeight: "100%",
                fontSize: "14px",
                fontWeight: 400
            }}>
                <h1>Artist Top Tracks List</h1>
                <ArtistTopTracksTable tracks={shazamData.tracks}/>
            </div>
        );
    } catch (error) {
        console.log("error", error);
    }
};

export default ShazamArtistTopTracks;