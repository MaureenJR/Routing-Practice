import React from "react";
import { useParams } from "react-router-dom";

const Input = () => {
    
    const {currentInput} = useParams();


    if(isNaN(currentInput) === false){
        return(
            <div>
                <h1>The number is: {currentInput}</h1>
            </div>
        );
    } else {
        return(
            <div>
                <h1>The word is : {currentInput}</h1>
            </div>
        );
    }
}

export default Input;