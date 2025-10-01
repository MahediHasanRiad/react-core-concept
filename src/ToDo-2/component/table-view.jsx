import React from "react";

function TableView({ datas, setDatas }){


    const handleEdit = id => {
        
    }

    const handleDelete = id => {
      if(id){
        const deleteItem = datas.filter(data => data.id !== id)
        setDatas(deleteItem)
      }else{
        setDatas(datas)
      }
    }

    const handleChecked = e => {
        if(e.target.checked){
            
        }
    }

    

    return(
        <div>
            <table className="table table-striped">
                <thead>
                   <tr>
                     <th>Select</th>
                     <th>ToDo</th>
                     <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                    {datas.map(data => (
                        <tr key={data.id}>
                        <td>
                            <input className="form-check-input" type="checkbox" onChange={handleChecked}/>
                        </td>
                        <td>{data.text}</td>
                        <td>
                            <button className="btn btn-info m-1" onClick={()=> handleEdit(data.id)}>Edit</button>
                            <button className="btn btn-danger m-1" onClick={()=> handleDelete(data.id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableView