import React, { useState } from "react";
import Navbar from "./component/navbar";
import TableView from "./component/table-view";

const ToDo2 = () => {

    const [allData, setAllData] = useState([])


    const getData = data => {
       
        if(!Array.isArray(data)){
            setAllData([].concat(data, allData))
        }else{
            setAllData(data)
        }
    }

    return(
        <div>
            <Navbar getData={getData} allData={allData} />
            <TableView allData={allData} setAllData={setAllData}/>
        </div>
    )
}

export default ToDo2