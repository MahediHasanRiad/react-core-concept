import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo_slice";

function InputTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addNewTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <section className="flex items-center m-4">
      <input
        className="p-2 border"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="p-2 bg-blue-500" onClick={addNewTodo}>
        <Search color="white" />
      </button>
    </section>
  );
}

export default InputTodo;
