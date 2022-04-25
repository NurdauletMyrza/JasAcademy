import React from 'react';
import Film from "./Film";

const Films = ({films}) => {
    try {
        return (
            <div className="Films" style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                padding: "auto",
                width: "1232px"
            }}>
                {films.map((film) =>
                    <Film film={film} key={film.id}/>
                )}
            </div>
        );
    } catch (error) {
        console.log("error", error);
    }
};

export default Films;