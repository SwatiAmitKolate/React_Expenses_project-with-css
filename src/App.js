import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import Expensesform from './components/Expensesform';

function App() {
  // const month = ["abc", "jan", "Feb", "March", "April", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
  const dummyData = [
    {
      id:1234,
      price:799,
      item:"New TV",
      date:new Date (2023, 7, 27)
    },
    {
      id:1235,
      price:899,
      item:"New Mobile",
      date:new Date (2019, 1, 10)
    },
    {
      id:1236,
      price:599,
      item:"New laptop",
      date:new Date (2020, 3, 2)
    },
    {
      id:1237,
      price:659,
      item:"New Bike",
      date:new Date (2021, 6, 12)
    },
  ];
  const [expenseData, setExpenseData] = useState(dummyData);
  // console.log(expenseData);
  const newFormData = (dataObj) => {
    setExpenseData([dataObj, ...expenseData ]);
  }
  console.log(expenseData);
  console.log(dummyData);
  return (
    <>
     <Expensesform  newFormData={newFormData}/>
     <Expenses  expenseData={expenseData} />
    </>
  );
}
export default App;
