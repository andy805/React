import React, {
  useState
} from 'react'
import ExpenseLineItem from "./ExpenseLineItem.js";
import ExpenseYearFilter from "../InputExpense/ExpenseYearFilter.js";
import Card from "../UI/Card.js";
import "./ExpenseMasterDetail.css";
import Chart from './Chart.js';


function ExpenseMasterDetail(prop) {
  const [filterYear, setFilterYear] = useState("2021");
  const filterYearHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };

  function filterByYear(expense) {
    let year = expense.date.getFullYear().toString();
    if (year === filterYear) {
      return true;
    }
    return false;
  }

  const filteredExpenses = prop.arrObj.filter(filterByYear);

  if (filteredExpenses.length === 0) {
    // we have no expense for the year so show text
    return (
      <div>
        <ExpenseYearFilter selectedYear={filterYear} filter={filterYearHandler} />
      <p> No expenses for this year</p>
      </div>
    );

  } else {
    return (
      <div>
        <div>
          <Chart expenseList={filteredExpenses}/>
        </div>
        <div>
          <ExpenseYearFilter selectedYear={filterYear} filter={filterYearHandler} />
          <Card className="ExpenseMasterDetail">
            {filteredExpenses.map(expense => {return (<ExpenseLineItem key={expense.id} arrayObj={expense} />)})}
          </Card>
        </div>
      </div>
    );

  }

}

export default ExpenseMasterDetail;
