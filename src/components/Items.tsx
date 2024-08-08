import React from "react";
import { todoItems } from "../types/utilities";

type ItemList = {

  items: todoItems[];
  setItems: React.Dispatch<React.SetStateAction<todoItems[]>>;
  
};

export const Items = ({ items, setItems }: ItemList) => {
    
  //  Remove Todo

  function removeTodo(todoId: string) {

    setItems((prev) => {

      return prev.filter((todo) => todo.id !== todoId);

    });

  }

  return (

    <div className="items">

      {items.map((val) => (

        <div key={val.id} className="item bg-neutral-400 flex justify-between">

          <p className="text-white">{val.item}</p>

          <i
            onClick={() => {
              removeTodo(val.id);
            }}
            className="fa-solid fa-trash cursor-pointer"
          ></i>

        </div>

      ))}

    </div>

  );
};
