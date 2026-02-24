import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: '',
      text: "",
      isSelect: false,
    },
  ],  
};

const todoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    /**
     * state = what we have
     * action = what's comming
     */
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        isSelect: false,
      };
      state.todos.push(newTodo);
    },

    updateTodo: (state, action) => {
      const {id, text} = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo,
      );
    },
    
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    selectTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isSelect: !todo.isSelect }
          : todo,
      );
    },
  },
});


export const { addTodo, updateTodo, deleteTodo, selectTodo } = todoSlice.actions
export default todoSlice.reducer