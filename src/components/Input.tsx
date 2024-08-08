import React from "react";

type todoInput = {

    inpValue: string;
    setInpValue: React.Dispatch<React.SetStateAction<string>>;
    type : 'text' | 'number' | 'email'

};

export const Input = ({ inpValue, setInpValue, type }: todoInput) => {

    return (
      
        <input
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
            placeholder="Enter text here"
            className="input-style "
            type={type}
        ></input>
        
    );
};