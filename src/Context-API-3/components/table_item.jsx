import { SquarePen, Trash, Save } from "lucide-react";
import { useCreateTodo } from "../context/todo_context";
import { useState } from "react";

function Item({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.text);

  const { selectTodo, editTodo, deleteTodo } = useCreateTodo();

  const update = () => {
    if (isEditable) {
      editTodo(todo.id, updatedTodo);
    }
    setIsEditable(!isEditable);
  };


  return (
    <div className="flex items-center gap-3 w-full max-w-md p-3 m-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        checked={todo.isSelect}
        onChange={() => selectTodo(todo.id)}
      />

      <input
        type="text"
        placeholder="Enter task..."
        className={`${todo.isSelect ? "text-gray-200" : ""} ${isEditable ? "border px-2" : ""} flex-1 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 font-medium`}
        value={updatedTodo}
        readOnly={!isEditable}
        onChange={(e) => setUpdatedTodo(e.target.value)}
      />

      <div className="flex items-center gap-1">
        <button
          onClick={update}
          className={`${todo.isSelect ? "text-slate-200" : "text-slate-500"} p-2  hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors`}
          disabled={todo.isSelect}
        >
          {isEditable ? <Save size={18} /> : <SquarePen size={18} />}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}

export default Item;
