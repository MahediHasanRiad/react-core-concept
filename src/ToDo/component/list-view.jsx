function ListView(){
    return(
        <section className="d-flex align-items-center border border-secondary-subtle">
            <div className="d-flex align-items-center gap-4 mr-auto">
                <input className="form-check-input" type="checkbox" id="" name="" value='' />
               <div>
                 <h6>This is name</h6>
                 <span>Date</span>
               </div>
            </div>
            <div>
                <button className="btn btn-success">Running</button>
            </div>
        </section>
    )
}

export default ListView