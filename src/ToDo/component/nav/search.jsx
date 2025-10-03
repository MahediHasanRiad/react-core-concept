import React from "react";
import PropTypes from "prop-types";

function SearchItem({ value, onChange }) {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        name="search"
        id="search"
        placeholder="search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

SearchItem.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchItem;
