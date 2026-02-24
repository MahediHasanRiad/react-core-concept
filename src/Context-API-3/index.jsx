import React, { useState } from "react";
import InputTodo from "./components/input_todo";
import TodoTable from "./components/table";
import { TodoContextProvider } from "./context/todo_context";

function ToDosWithContextAPI() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{...todo}, ...prev])
  }

  const editTodo = (id, text) => {
    const update = todos.map(todo => todo.id === id ? {text: text} : todo)
    setTodos(update)
  }

  const deleteTodo = (id) => {
    const filter = todos.filter(todo => todo.id !== id)
    setTodos(filter)
  }

  const selectTodo = (id) => {
    const select = todos.map(todo => todo.id === id ? {...todo, isSelect: !todo.isSelect} : todo)
    setTodos(select)
  }
 

  return (
    <TodoContextProvider value={{todos, addTodo, editTodo, deleteTodo, selectTodo}}>
      <section className="w-2/3 min-h-screen m-auto mt-6">
        <InputTodo />
        <TodoTable />
      </section>
    </TodoContextProvider>
  );
}

export default ToDosWithContextAPI;
