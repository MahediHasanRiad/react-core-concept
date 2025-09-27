import React, { useState } from "react";

const initialValue = {
  id: '',
  date: '',
  text: '',
  description: '',
  isSelect: [],
  isComplete: false
}

function Navbar({ getData }) {

  const [data, setData] = useState({...initialValue})

  const inputToDoHandler = (e) => {
    setData({
      [e.target.name]: e.target.value
    })
  };

  const addItem = () => {
    setData({
      ...data,
      
    })
    getData(data)

  }

  return (
    <div className="container">
      <h1 className="text-center">Stack ToDo</h1>
      <section className="input-group">
        <input
          className="form-control"
          type="text"
          id="inputTodo"
          name="inputTodo"
          value=""
          onChange={inputToDoHandler}
        />
        <button className="btn btn-success" onClick={addItem}>ADD</button>
      </section>
      <section className="d-flex justify-content-between align-items-center mt-2">
        <div className="btn-group">
          <button className="btn btn-info">All</button>
          <button className="btn btn-info">Running</button>
          <button className="btn btn-info">Complete</button>
        </div>
        <div className="d-flex gap-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="listView"
              name="itemView"
              value=""
            />
            <label className="form-check-label" htmlFor="listView">
              List View
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="tableView"
              name="itemView"
              value=""
            />
            <label className="form-check-label" htmlFor="tableView">
              Table View
            </label>
          </div>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger">Clear Select</button>
          <button className="btn btn-danger">Clear Complete</button>
          <button className="btn btn-danger">Reset</button>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
