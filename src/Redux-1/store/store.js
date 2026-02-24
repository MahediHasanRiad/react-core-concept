import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../feature/todo_slice'

export const store = configureStore({
  reducer: {
    Todo: todoSlice
  }
})