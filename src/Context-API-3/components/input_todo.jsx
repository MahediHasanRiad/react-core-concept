import { Search } from "lucide-react";
import { useState } from "react";
import {useCreateTodo} from '../context/todo_context'
import shortid from "shortid";

function InputTodo() {

  const [input, setInput] = useState('')

  const {addTodo} = useCreateTodo()

  // create todo
  const createTodo = () => {
    if(input === '') return
    
    const newTodo = {
      id: shortid.generate(),
      text: input,
      isSelect: false
    }
    addTodo(newTodo)
    setInput("")
  }

  return (
    <div className="flex items-center w-full max-w-sm group">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full px-4 py-2 text-sm bg-white border border-slate-300 rounded-l-lg 
               outline-none focus:border-blue-500 transition-colors"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="flex items-center justify-center px-4 py-2 bg-blue-600 border border-blue-600 
                     rounded-r-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm"
        onClick={createTodo}
      >
        <Search size={20} color="white" />
      </button>
    </div>
  );
}

export default InputTodo;
