import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import IconStar from "./IconStar";

const Film = ({film}) => {
    return (
        <Card className="Film" sx={{
            minWidth: "292px",
            minHeight: "440px",
            backgroundImage: "url('https://www.themoviedb.org/t/p/w220_and_h330_face" + film.poster_path + "')",
            backgroundRepeat: "no-repeat round",
            position: "relative",
            margin: "13.5px 8px",
            borderRadius: "0"
        }}>
            <CardContent sx={{
                position: "absolute",
                bottom: 0
            }}>
                <div>
                    {[...Array(5)].map((_, i) =>
                        <IconStar compareValue={film.vote_average - 2 * i} key={i}/>
                    )}
                </div>
                <Typography variant="h5" component="div" sx={{
                    color: "#FFF",
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 500
                }}>{film.original_title}</Typography>
            </CardContent>
        </Card>
    );
};

export default Film;