import './App.css';
import Films from "./components/Films";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
  return (
    <div className="App">
      <Films films={data.results}/>
    </div>
  );
}

export default App;
