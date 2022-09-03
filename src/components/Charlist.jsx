import React from "react";
import "./Chartlist.css"


const Chartlist =(props) => {
    let barHeight = "0%"
    if(props.maxPrice > 0){
        barHeight = Math.round((props.value/ props.maxPrice) * 100 );
        console.log(barHeight);
    }
    console.log(props.month);
    return(
      
          <div className="chart-bar">
            <div className="chart-bar_inner">
                <div className="chart-bar_fill " style={{height:barHeight}} >
                </div>
            </div>
          <label>{props.label}</label>
          <div className="chart-bar_label"></div>
        </div>
    );
}

export default Chartlist;