import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      text: '',
      isSelect: false
    }
  ],
  addTodo: (text) => {},
  editTodo: (id, text) => {},
  deleteTodo: (id) => {},
  selectTodo: (id) => {}
})

export const TodoContextProvider = todoContext.Provider

export const useCreateTodo = () => {
  return useContext(todoContext)
}