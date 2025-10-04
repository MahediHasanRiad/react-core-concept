import PropTypes from "prop-types";
import Model from "./model";

function CreateItem({
  search,
  searchHandler,
  titleValue,
  titleHandler,
  description,
  descriptionHandler,
  addOption,
  options,
  optionHandler,
  submit,
}) {
  return (
    <>
      <div className="form-group d-flex ">
        <input
          className="form-control"
          type="text"
          name="createItem"
          value={search}
          onChange={searchHandler}
          placeholder="search..."
        />

        {/* Button trigger modal  */}
        <button
          className="btn btn-success mx-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          NEW
        </button>
      </div>

      {/* Modal */}
      <Model
        titleValue={titleValue}
        titleHandler={titleHandler}
        description={description}
        descriptionHandler={descriptionHandler}
        addOption={addOption}
        options={options}
        optionHandler={optionHandler}
        submit={submit}
      />
    </>
  );
}

CreateItem.propTypes = {
  value: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default CreateItem;
