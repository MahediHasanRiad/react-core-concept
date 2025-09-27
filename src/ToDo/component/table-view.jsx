import PropTypes from "prop-types";
import { useState } from "react";

function TableView({ todo, toggleSelect, toggleComplete }) {

    const [allToDo, setAllToDo] = useState(todo)
console.log(todo)
  return (
    <div>
      <table className="table table-strip">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

TableView.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TableView;
