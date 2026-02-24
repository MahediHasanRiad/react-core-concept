import { useCreateTodo } from "../context/todo_context";
import Item from "./table_item";

function TodoTable() {
  const { todos } = useCreateTodo();

  return (
    <section className="w-full mt-5">
      
      {todos.length > 0 ? (
        todos.map((todo) => <Item key={todo.id} todo={todo} />)
      ) : (
        <div>
          <h6>No Task Found ...</h6>
        </div>
      )}
    </section>
  );
}

export default TodoTable;
