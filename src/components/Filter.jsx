import React, { useState } from "react";
import "./Filter.css"



const Filter = ({filteredValue}) => {
        const[filteredYear, setFilteredYear] = useState("All");
        const [noData, setNoData] =useState();
        const selectedYear = (e) =>{
            setFilteredYear(e.target.value);

        }
        const nodata = (e) =>{
            setNoData(e.target.value);

        }
        filteredValue(noData);
        console.log(noData);
        filteredValue(filteredYear);
        console.log(filteredYear);
        return(
            <div className="dropDown">
                <div className="FilterText">
                    <span>Filter By Year = </span>
                </div>
                
                <div >
                <select onChange={selectedYear} className="dropDownBox">
                <option value="All">All</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
                </div>

            </div>
           
        );
}
export default Filter;