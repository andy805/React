import React, {useState} from 'react'
import ExpenseLineItem from "./ExpenseLineItem.js";
import ExpenseYearFilter from "../InputExpense/ExpenseYearFilter.js";
import Card from "../UI/Card.js";
import "./ExpenseMasterDetail.css";


function ExpenseMasterDetail(prop) {
  const [filterYear, setFilterYear] = useState("2021");
  const filterYearHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  function filterByYear(expense) {
    let year = expense.date.getFullYear().toString();
    console.log(year);
    if(year === filterYear){
      console.log("true");
      return true;
      // return ( (<ExpenseLineItem key={expense.id} arrayObj={expense}/>));
    }
    return false;
  }
  return (
    <div>
      <ExpenseYearFilter selectedYear={filterYear} filter={filterYearHandler} />
      <Card className="ExpenseMasterDetail">
        {prop.arrObj.filter(filterByYear).map(expense => {return(<ExpenseLineItem key={expense.id} arrayObj={expense} />)})}
        {/* {prop.arrObj.map(expense => {return (<ExpenseLineItem key={expense.id} arrayObj={expense} />)})} */}
        {/* <ExpenseLineItem arrayObj={prop.arrObj[0]} />
        <ExpenseLineItem arrayObj={prop.arrObj[1]} />
        <ExpenseLineItem arrayObj={prop.arrObj[2]} />
        <ExpenseLineItem arrayObj={prop.arrObj[3]} /> */}
      </Card>
    </div>
  );
}

export default ExpenseMasterDetail;
