import React, { useState } from "react";
import Navbar from "./component/navbar";
import TableView from "./component/table-view";

const ToDo2 = () => {

    const [allData, setAllData] = useState([])

    const getData = data => {
        setAllData([].concat(allData, data))
    }

    return(
        <div>
            <Navbar getData={getData} allData={allData}/>
            <TableView datas={allData} setDatas={setAllData}/>
        </div>
    )
}

export default ToDo2