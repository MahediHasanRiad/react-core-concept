import PropTypes from "prop-types";
import { useState } from "react";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
    <tr>

      <td>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(id)} />
      </td>
      <td>{todo.date}</td>
      <td>{todo.text}</td>
      <td>
        <button className={`btn ${todo.isComplete ? "btn-danger" : "btn-success"}`} onClick={()=> toggleComplete(id)}>
          {todo.isComplete ? "Complete" : "Running"}
        </button>
      </td>

    </tr>
);

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
}

function TableView({ todos, toggleSelect, toggleComplete }) {
  return (
    <div>
      <table className="table table-strip">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
            <RowItem
              key={todo.id}
              todo={todo}
              toggleSelect={toggleSelect}
              toggleComplete={toggleComplete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableView.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
