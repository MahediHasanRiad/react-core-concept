import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import InputTodo from "./components/input_todo";
import ToDoLists from "./components/table";

function TodoWithRedux() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="h1">this is redux Project</h1>
        <InputTodo />
        <ToDoLists />
      </div>
    </Provider>
  );
}

export default TodoWithRedux;
