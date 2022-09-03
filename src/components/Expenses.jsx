import React, { useState } from "react";
import "./Expenses.css"
import Expensesdate from "./Expensesdate";
import Filter from "./Filter";
import Chart from "./Chart";
const Expenses = (props) => {
    console.log(props.expenseData);
    const [updateFilterYear, setUpdateFilterYear] = useState();
    const [updateNoData, setUpdateNoData] = useState();
    const filteredValue = (filteredYear) => {
        // console.log(filteredYear);
        setUpdateFilterYear(filteredYear);
    }
    console.log(updateFilterYear);
    // const nodata = (noData) => {
    //     console.log(noData);
    //     setUpdateNoData(noData);
    // }
    let filterRecord = props.expenseData.filter(row => {
        if (updateFilterYear == "All") {
            return (row);
        }
      
        // else if (updateFilterYear == "Null") {
        //     return (
        //         <h1>data</h1>
              
        //     )
        // }

    else{
        return(
   row.date.getFullYear() == updateFilterYear

        );
    }


});
// let filterRecord = props.expenseData.filter(row => {
//     if (updateNoData == false) {
//         return (
//             <h1>sdfghjkldfghj</h1>
//         );
//     }
// });
// const noData = filterRecord.find((noData)=>{
//     if(props.expenseData.date.getFullYear() ==  ){
//        return true;
//      }
//         return false;
//    });


    return (
        <>
            <div className="maincontainer">
                <Filter filteredValue={filteredValue} />
                <Chart filterRecord={filterRecord}/>
            </div>
            {
                filterRecord.map(row => {
                    return (
                        <div>
                            {/* <h1 className={filterRecord ? '':''}>No Data Found</h1>  */}
                            <div className="maincontainer">
                                <div className="expensesBox">
                                    <div>
                                        <Expensesdate dateData={row} />
                                    </div>
                                    <div className="item">
                                        <h1>{row.item}</h1>
                                    </div>
                                    <div className="price">$ {row.price}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}
export default Expenses;