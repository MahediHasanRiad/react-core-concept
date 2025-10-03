import React from "react";
import PropTypes from "prop-types";

function FilterItem({ filterItem }){
    return(
        <div>
            <select className="form-select" name="filter" id="filter" onChange={(e)=>filterItem(e.target.value)}>
                <option value="all">ALL</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    )
}

FilterItem.propTypes = {
    FilterItem: PropTypes.func.isRequired
}

export default FilterItem
