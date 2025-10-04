import { useState } from "react";
import CreateItem from "./component/input/create";


const initialValue = {
    id: '',
    title: '',
    description: '',
    addOption: [
        {
            id: '',
            option: '',
            date: ''
        }
    ],
    date: '',
    opinion: []
}

function Poll() {
  const [allData, setAllData] = useState({...initialValue});
  const [search, setSearch] = useState('')
  const [titleValue, setTitleValue] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([])

  const searchHandler = e => {
    setSearch(e.target.value)
  }

  const titleHandler = e => {
    setTitleValue(e.target.value)
  };

  const descriptionHandler = e => {
    setDescription(e.target.value)
  };

  const addOption = () => {

  }

  const optionHandler = () => {}

  const submit = () => {}

  return (
    <>
      <section className="grid">
        <div className="col-6 bg-secondary-subtle p-3">
          <CreateItem
            search={search}
            searchHandler={searchHandler}
            titleValue={titleValue}
            titleHandler={titleHandler}
            description={description}
            addOption={addOption}
            descriptionHandler={descriptionHandler}
            options={options}
            optionHandler={optionHandler}
            submit={submit}
          />
          <h1 className="display-6 mt-5">List of POLL</h1>
          <hr />
        </div>
      </section>
    </>
  );
}

export default Poll;
