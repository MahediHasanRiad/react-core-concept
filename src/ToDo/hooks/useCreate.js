import React, { useState } from "react";

function useCreate(){
    
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

 


    return {
       inputHandler,
       add,
       handleKey,
       editItem,
       saveEditItem,
       cencelEditItem,
       deleteItem
    }
}

export default useCreate