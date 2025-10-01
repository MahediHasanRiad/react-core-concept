import React, { useState } from "react";
import shortid from "shortid";

const initialValue = {
  id: '',
  date: '',
  text: '',
  description: '',
  isSelect: false,
  isComplete: false
}

function Create({ getData }){

    const [data, setData] = useState({...initialValue})

  const inputToDoHandler = (e) => {
   setData({
    ...data,
    [e.target.name]: e.target.value
   })
  };

  const addItem = () => {
    const newData = {
      ...data,
      id: shortid.generate(),
      date: new Date().toDateString()
    }
    getData(newData)
    setData({...initialValue})
  }

    return(
        <section className="input-group">
        <input
          className="form-control"
          type="text"
          name='text'
          value={data.text}
          onChange={inputToDoHandler}
        />
        <button className="btn btn-success" onClick={addItem}>ADD</button>
      </section>
    )
}

export default Create