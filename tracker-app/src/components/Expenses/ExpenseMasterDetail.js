import React, {useState} from 'react'
import ExpenseLineItem from "./ExpenseLineItem.js";
import ExpenseYearFilter from "../InputExpense/ExpenseYearFilter.js";
import Card from "../UI/Card.js";
import "./ExpenseMasterDetail.css";

function ExpenseMasterDetail(prop) {
  const [filterYear, setFilterYear] = useState("");
  const filterYearHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  return (
    <div>
      <ExpenseYearFilter filter={filterYearHandler} />
      <Card className="ExpenseMasterDetail">
        {prop.arrObj.map((expense) => <ExpenseLineItem arrayObj={expense}/>)}
        {/* <ExpenseLineItem arrayObj={prop.arrObj[0]} />
        <ExpenseLineItem arrayObj={prop.arrObj[1]} />
        <ExpenseLineItem arrayObj={prop.arrObj[2]} />
        <ExpenseLineItem arrayObj={prop.arrObj[3]} /> */}
      </Card>
    </div>
  );
}

export default ExpenseMasterDetail;
