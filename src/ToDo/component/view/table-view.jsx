import React from "react";
import PropTypes from "prop-types";

function TableView({ todos, completeItem, editItem, deleteItem }){
    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ToDo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>
                                <input type="checkbox" onChange={()=> completeItem(todo.id)} checked={todo.isComplete}/>
                            </td>
                            <td>{todo.text}</td>
                            <td>
                                <button className="btn btn-success m-2" onClick={()=> editItem(todo.id)}>Edit</button>
                                <button className="btn btn-danger m-2" onClick={()=> deleteItem(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

TableView.propTypes = {
    todos: PropTypes.func.isRequired
}

export default TableView