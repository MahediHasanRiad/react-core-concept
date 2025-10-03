import React from "react";
import PropTypes from "prop-types";

function ViewField({ view }){
    return(
        <div className="d-flex">
           <div className="form-check m-2">
             <input className="form-check-input" type="radio" name="view" id="tableView" onChange={view}/>
             <label className="form-check-label" htmlFor="tableView">Table View</label>
           </div>

           <div className="form-check m-2">
             <input className="form-check-input" type="radio" name="view" id="listView" onChange={view} />
             <label className="form-check-label" htmlFor="listView">List View</label>
           </div>
        </div>
    )
}

ViewField.propTypes = {
    view: PropTypes.bool.isRequired
}

export default ViewField