import React from "react";
import { useState } from "react";
import "./Expensesform.css"

const Expensesform = (props) => {

    const [title,setTitle] = useState("");
    const [Amount,setAmount] = useState();
    const [date, setDate] = useState();
    const [viewForm,setViewForm] = useState(false);
    console.log(title);
    console.log(Amount);
    console.log(date);

    const submitHandler = (e) => {
        e.preventDefault();
            const dataObj = {
                id:Math.random(),
                item:title,
                price:Amount,
                date:new Date(date)
            }
            console.log(dataObj);
            props.newFormData(dataObj);

            setAmount("");
            setTitle("");
            setDate();
            alert("Data Add Successfully!!")
             setViewForm(!viewForm);
    }

        return(
            <>
            <form onSubmit={submitHandler} className={viewForm ? 'visibleform':'nonvisibleform '}>
              <div> 
                <label htmlFor="Title">Title</label>
                <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title} required /></div>

                <div>
                <label className="AmountLable" htmlFor="amount">Amount</label>
                <input type="number" name="Amount" onChange={e => setAmount(e.target.value)} value={Amount} required />
                </div>

               <div>
               <label className="D-lable" htmlFor="date">Date</label>
                <input type="date" name="date" onChange={e => setDate(e.target.value)} value={date} />
               </div>

            <input className="Add-Expense" type="submit" value="Add Expense"   />
                
            </form> 
            <div  className={viewForm ? 'nonvisibleform ':'visibleform  B-container '} >
            <button onClick={() => setViewForm(!viewForm)} className={viewForm ? 'nonvisibleform ':'visibleform form addNewExpenses  '}>Add New Expenses</button>
            </div>
            </>
        );
}

export default Expensesform;