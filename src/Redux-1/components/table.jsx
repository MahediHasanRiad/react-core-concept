import React from "react";
import TableItem from "./table_item";
import { useSelector } from "react-redux";

function ToDoLists() {
  const todos = useSelector((state) => state.Todo.todos);
console.log('t', todos)
  return (
    <section>
      {todos?.length > 0 ? (
        todos.map((todo) => <TableItem key={todo.id} todo={todo} />)
      ) : (
        <div>
          <p>No Task Found...</p>
        </div>
      )}
    </section>
  );
}

export default ToDoLists;
