import React from "react";
import { useParams } from "react-router-dom";

const WordStyle = () => {
    const {word} = useParams();
    const {wordColor} = useParams();
    const {wordBackgoundColor} = useParams();
    return(
        <div>
            <h1 style={{color:wordColor, backgroundColor:wordBackgoundColor}}>{word}</h1>
        </div>
    );
}

export default WordStyle;