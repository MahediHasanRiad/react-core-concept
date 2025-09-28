import { useState } from "react";
import Navbar from "./component/nav";
import TableView from "./component/table-view";
import ListView from "./component/list-view";


function ToDo() {
  
  
  const toggleSelect = id => {

  }

  const toggleComplete = id => {

  }

  return (
   <div>
    <Navbar/> <br />
    <TableView todos={todos} toggleSelect={()=>toggleSelect(todos.id)} toggleComplete={()=>toggleComplete(todos.id)}/> <br />
    <ListView todos={todos} toggleSelect={()=> toggleSelect(todos.id)} toggleComplete={() => toggleComplete(todos.id)} />
   </div>
  );
}

export default ToDo;
