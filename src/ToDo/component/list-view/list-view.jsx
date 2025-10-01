import PropTypes from "prop-types";

function ListItem({ todo, toggleSelect, toggleComplete }) {

  return (
    <section className="d-flex align-items-center border border-secondary-subtle">
      <div className="d-flex align-items-center gap-4 mr-auto">
        
        <input
          className="form-check-input"
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(id)}
        />

        <div>
          <h6>{todo.text}</h6>
          <span>{todo.date}</span>
        </div>
      </div>
      <div>
        <button
          className="btn btn-success"
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </button>
      </div>
    </section>
  );
}

ListItem.propType = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


function ListView({ todos, toggleSelect, toggleComplete }){
    return(
        <div>
            <ul>
                {todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                )) }
            </ul>
        </div>
    )
}

ListView.propType = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView;
