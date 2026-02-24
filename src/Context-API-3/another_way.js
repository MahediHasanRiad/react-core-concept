/**
 * best way to use context-api
 */

import InputTodo from "./components/input_todo";
import TodoTable from "./components/table";
import { TodoContextProvider } from "./context/another_way";

function ToDosWithContextAPI() {
  return (
    <TodoContextProvider>
      <section className="w-full max-w-2xl m-auto mt-10 px-4">
        <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
        <InputTodo />
        <TodoTable />
      </section>
    </TodoContextProvider>
  );
}