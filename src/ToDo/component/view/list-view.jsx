import React from "react";
import PropTypes from "prop-types";

function ListView({ todos }) {
   
  return (
    <div className="border border-secondary-subtle">    
        {todos.map(todo => (
            <div className="d-flex justify-content-between" key={todo.id}>
                <div>
                    <input className="form-check-input" type="checkbox" onChange={()=> completeItem(todo.id)} checked={todo.isComplete}/>
                </div>
                <div>
                    <span>{todo.text}</span> <br />
                    <span>{todo.date}</span>
                 </div>
                <div>
                    <button className="btn btn-success m-2">Edit</button>
                    <button className="btn btn-danger m-2">Delete</button>
                </div>
            </div>
        ))}
    </div>
    )
}

ListView.propTypes = {
    todos: PropTypes.func.isRequired
}

export default ListView