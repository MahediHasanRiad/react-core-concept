import { useState } from "react";
import Navbar from "./component/nav";
import TableView from "./component/table-view/table-view";
import ListView from "./component/list-view/list-view";


function ToDo() {
  
  const [todos, setTodos] = useState([])

  const getDate = data => {
    setTodos([].concat(todos, data))
  }

  const toggleSelect = id => {

  }

  const toggleComplete = id => {

  }

  return (
   <div>
    <Navbar getData={getDate}/> <br />
    <TableView todos={todos} toggleSelect={()=>toggleSelect(todos.id)} toggleComplete={()=>toggleComplete(todos.id)}/> <br />
    <ListView todos={todos} toggleSelect={()=> toggleSelect(todos.id)} toggleComplete={() => toggleComplete(todos.id)} />
   </div>
  );
}

export default ToDo;
