import React from "react";
import "./Expensesdate.css"

const Expensesdate = (props) => {

    const month = props.dateData.date.toLocaleString("en-us", {month:"long"})
    const date = props.dateData.date.getDate();
    const year = props.dateData.date.getFullYear();
    return(
        <div className="date">
        <h2>{month}</h2>
        <p>{year}</p>
        <h3>{date}</h3>
        </div>
    )
}
 export default Expensesdate;