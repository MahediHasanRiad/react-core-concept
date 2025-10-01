import React, { useState } from "react";
import shortid from "shortid";

const Navbar = ({ getData, allData }) => {
  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState('')

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const addItem = (e) => {
    const newData = {
      id: shortid.generate(),
      text: todo,
      isComplete: false,
    };
    // setTodo(newData);
    getData(newData)
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const searchHandler = (e) => {
    const searchValue = e.target.value

    if(e.target.value !== ''){
      const searchData = allData.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
      setSearch(searchData)
      getData(searchData)
    }else{
      getData(allData)
    }
    
  };

  return (
    <section className="container mx-auto">
      <h1 className="display-3 text-center">ToDo List</h1> <br />
      <section className="d-flex justify-content-between m-2">
        <div className="d-flex">
          <input
            className="form-control flex-grow-1"
            type="text"
            value={todo}
            onChange={inputHandler}
            onKeyDown={handleKeyDown}
            placeholder="Add item..."
          />
          <button className="btn btn-success" onClick={addItem}>
            ADD
          </button>
        </div>
        <div>
          <input
            className="form-control"
            type="text"
            value={search}
            onChange={searchHandler}
            placeholder="Search...."
          />
        </div>
        <div>
          <select className="form-select" name="filter" id="filter">
            <option value="all">ALL</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </section>
    </section>
  );
};

export default Navbar;
