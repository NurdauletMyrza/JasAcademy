import './App.css';
import React from "react";
import ShazamSearchApp from "./components/ShazamSearchApp";
import ShazamArtistTopTracks from "./components/ShazamArtistTopTracks";

function App() {
  return (
      <div className="App">
        <ShazamSearchApp/>
        <ShazamArtistTopTracks/>
      </div>
  );
}

export default App;
