/**
 * best way to use context api
 */

import { createContext, useContext, useState } from "react";

// create context
export const todoContext = createContext();

// create provider
export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, isSelect: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const editTodo = (id, text) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const selectTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isSelect: !t.isSelect } : t)),
    );
  };

  return (
    <todoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, selectTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useCreateTodo = () => useContext(todoContext);
