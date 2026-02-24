import { Pencil, Save, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTodo, updateTodo } from "../feature/todo_slice";
import { useState } from "react";

function TableItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
// console.log(updateTodo)
  const dispatch = useDispatch();

  const updateTodoItem = (id) => {
    setIsEditable(!isEditable);
    dispatch(updateTodo({id, text: updatedText}));
  };

  return (
    <div className="w-1/2 border flex items-center m-2 px-4">
      <input
        type="checkbox"
        className={`w-4 h-4 m-2 ${todo.isSelect ? "bg-gray-300" : "bg-white"}`}
        checked={todo.isSelect}
        onChange={() => dispatch(selectTodo(todo.id))}
      />
      <input
        type="text"
        className={`p-2 ${isEditable ? "border px-2 rounded" : ""}`}
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        onClick={() => updateTodoItem(todo.id)}
        disabled={todo.isSelect}
        className={`${todo.isSelect ? "text-gray-200" : ""} m-1`}
      >
        {isEditable ? <Save size={18} /> : <Pencil size={18} />}
      </button>
      <button className="m-1" onClick={() => dispatch(deleteTodo(todo.id))}>
        <Trash size={18} />
      </button>
    </div>
  );
}

export default TableItem;
