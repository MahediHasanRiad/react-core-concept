import PropTypes from "prop-types"

function Model({ titleValue, titleHandler, description, descriptionHandler, options, optionHandler, addOption, submit }){
    return(
        <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* model body  */}
            <div className="modal-body">
                <form>
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" id="title" value={titleValue} onChange={titleHandler} />

                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" value={description} onChange={descriptionHandler} />

                    <div className="justify-content-between m-2">
                        <span>Enter Option </span>
                        <button className="btn btn-info" onClick={addOption}>ADD option</button>
                    </div>
                    <hr />

                    <div className="m-2 d-flex">
                        <input className="form-control" type="text" name="option1" value={options} onChange={optionHandler} />
                        <button className="btn btn-danger mx-1">Delete</button>
                    </div>
                    <div className="m-2 d-flex">
                        <input className="form-control" type="text" name="option2" value={options} onChange={optionHandler} />
                        <button className="btn btn-danger mx-1">Delete</button>
                    </div>
                </form>
            </div>
            {/* model body end  */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={submit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

Model.propTypes = {
    titleValue: PropTypes.string.isRequired,
    titleHandler: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    descriptionHandler: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    optionHandler: PropTypes.func.isRequired,
    addOption: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
}

export default Model