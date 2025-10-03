import React from "react";
import PropTypes from "prop-types";

function CreateItem({ value, inputData, add, isEdit, saveItem, cancelItem, handleKey }) {

  
  return (
    <div className="form-group d-flex">
      <input
        className="form-control"
        type="text"
        name="text"
        id="text"
        value={value}
        placeholder="create todo..."
        onChange={inputData}
        onKeyDown={handleKey}
      />
      {isEdit ? (
        <div className="d-flex">
          <button className="btn btn-success m-2" onClick={saveItem}>Save</button>
          <button className="btn btn-danger m-2" onClick={cancelItem}>Cancel</button>
        </div>
      ) : (
        <button className="btn btn-success" onClick={add}>
          ADD
        </button>
      )}
    </div>
  );
}

CreateItem.propTypes = {
  todos: PropTypes.object.isRequired,
  inputData: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  saveItem: PropTypes.func,
  cancelItem: PropTypes.func
};

export default CreateItem;
