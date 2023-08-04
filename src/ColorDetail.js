
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ColorDetail = ({colors}) => {
    const {color} = useParams();
    const currentColor = colors.filter((item) => (item === color)).join("")
    
    // currentColor ? console.log(currentColor) : console.log("Boooo!!!!") 
    // TODO
    // change the background to the color that gets passed here
    // put a link back to the home page
    // style the page
    // prevent the user from entering a color that isn't in the array

    return (
        <div>
            This is {currentColor ? currentColor : "A MISTAKE"}
        </div>
    )
}

export default ColorDetail;