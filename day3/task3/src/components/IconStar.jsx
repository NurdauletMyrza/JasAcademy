import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const IconStar = ({ compareValue }) => {
    let icon = <StarIcon fontSize="small" sx={{ color: "white" }}/>
    if (compareValue < 2 && compareValue > 0) {
        icon = <StarHalfIcon fontSize="small" sx={{ color: "white" }}/>
    } else if (compareValue <= 0) {
        icon = <StarBorderIcon fontSize="small" sx={{ color: "white"}}/>
    }
    return (
        icon
    );
};

export default IconStar;