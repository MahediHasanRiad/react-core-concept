import { useState } from "react";

function TableView({ allData, setAllData }) {

  const handleEdit = (id) => {
    const editData = allData.map(data => {
      if(data.id === id){
        
      }
    })
  };

  const handleDelete = (id) => {
    if (id) {
      const deleteItem = allData.filter((data) => data.id !== id);
      setAllData(deleteItem);
    } else {
      setAllData(datas);
    }
  };

  const handleChecked = (id) => {
    const updateData = allData.map((data) => {
      if (data.id === id) {
        return { ...data, isComplete: !data.isComplete };
      }
      return data;
    });
    setAllData(updateData);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>ToDo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data) => (
            <tr key={data.id}>
              <td>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={() => handleChecked(data.id)}
                  checked={data.isComplete}
                />
              </td>
              <td>{data.text}</td>
              <td>
                <button
                  className="btn btn-info m-1"
                  onClick={() => handleEdit(data.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
