import { useState } from "react";
import shortid from "shortid";

// components
import CreateItem from "./component/nav/create";
import FilterItem from "./component/nav/filter";
import SearchItem from "./component/nav/search";
import ViewField from "./component/view/view";
import TableView from "./component/view/table-view";
import ListView from "./component/view/list-view";

// hooks
// import useCreate from "./hooks/useCreate";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isTableView, setIsTableView] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('all')

  // input handler
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  // create item
  const add = (e) => {
    const addItem = {
      id: shortid.generate(),
      date: new Date().toDateString(),
      text: inputValue,
      isComplete: false,
    };
    setTodos([addItem, ...todos]);
    setInputValue("");
  };

  // enter key
  const handleKey = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      add();
    }
  };

  // Edit item
  const editItem = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        setInputValue(todo.text);
      }
    });

    const alsoDelete = todos.filter((todo) => todo.id !== id);
    setTodos(alsoDelete);

    setIsEdit(true);
  };

  // save edit item
  const saveEditItem = (e) => {
    const addItem = {
      id: shortid.generate(),
      date: new Date().toDateString(),
      text: inputValue,
      isComplete: false,
    };
    setTodos([...todos, addItem]);
    setIsEdit(false);
    setInputValue("");
  };

  // cencel Edit item
  const cencelEditItem = () => {
    setIsEdit(false);
    setTodos(todos);
  };

  // delete item
  const deleteItem = (id) => {
    const deleteItem = todos.filter((todo) => todo.id !== id);
    setTodos(deleteItem);
  };

  // show data = table-view or list-view
  const showData = () => {
    setIsTableView(!isTableView);
  };

  // search item
  const searchValue = (e) => {
    setSearch(e.target.value);
  };

  // search value in display
  let displayData = search === "" ? todos : todos.filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        );


  // check complete item
  const completeItem = id => {
    const checkedItem = todos.map(todo => {
      if(todo.id === id){
        return {...todo, isComplete: !todo.isComplete}
      }
      return todo
    })
    setTodos(checkedItem)
  }

  // filter item in display
  const filterItem = value => {
     setFilter(value)
  };

  displayData = todos.filter(todo => {
    if(filter === 'all') return todos
    else if(filter === 'completed') return todo.isComplete
    else return !todo.isComplete
  })

  return (
    <>
      <h1 className="display-3 text-center">ToDo</h1>
      <section className="d-flex justify-content-between">
        <CreateItem
          inputData={inputHandler}
          add={add}
          value={inputValue}
          isEdit={isEdit}
          saveItem={saveEditItem}
          cancelItem={cencelEditItem}
          handleKey={handleKey}
        />
        <ViewField view={showData} />
        <SearchItem value={search} onChange={searchValue} />
        <FilterItem filterItem={filterItem} />
      </section>
      <section>
        {isTableView ? (
          <TableView
            todos={displayData}
            completeItem={completeItem}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ) : (
          <ListView
            todos={displayData}
            completeItem={completeItem}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        )}
      </section>
    </>
  );
}

export default ToDo;
