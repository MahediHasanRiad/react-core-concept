import { useState } from "react";
import Navbar from "./component/nav";
import TableView from "./component/table-view";


function ToDo() {
 
  const [todo, setToDo] = useState()

  const getData = data => {
    setToDo(data)
  }
  
  const toggleSelect = e => {

  }

  const toggleComplete = e => {

  }

  return (
   <div>
    <Navbar getData={getData}/> <br />
    <TableView todo={todo} toggleSelect={()=>toggleSelect(todo.id)} toggleComplete={()=>toggleComplete(todo.id)}/> <br />

   </div>
  );
}

export default ToDo;
