import React from "react";
import { todoItems } from "../types/utilities";

type todoButton = {

  className: string;
  inpValue: string;
  setInpValue: React.Dispatch<React.SetStateAction<string>>;
  items: todoItems[];
  setItems: React.Dispatch<React.SetStateAction<todoItems[]>>

};

export const Button = ({ className , inpValue , setInpValue ,items ,setItems}: todoButton) => {

  //  Add Todo

  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();

    let flag: number = 0;

    let trimedValue = inpValue.trim();

    for (let i = 0; i < items.length; i++) {

      if (items[i].item === trimedValue) {

        alert("This Item Already Added...");
        setInpValue("");
        flag = 1;

      }

    }

    if (flag === 0) {

      if (trimedValue === "") return null;

      const newTodo: todoItems = {

        id: Date.now().toString(),
        item: trimedValue,

      };

      setItems((prev) => [newTodo, ...prev]);
      setInpValue("");

    }

  };

  return (

    <div>

      <button
        
        type="submit"
        className={`ml-8 bg-blue-500 text-white rounded ${className}`}
        onClick={handleSumbit}
      >
        Add
      </button>

    </div>
    
  );
};

