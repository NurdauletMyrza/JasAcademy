import './App.css';
import React, { useEffect, useState } from "react";
import Comment from "./components/Comment";

function App() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = "https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setComments(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    console.log(comments);
  return (
      <div className="App">
          {comments.map((comment) =>
              <Comment comment={ comment } key={ comment.id }/>
          )}
      </div>
  );
}

export default App;
