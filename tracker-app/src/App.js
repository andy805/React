import React,{useState} from 'react'
import ExpenseMasterDetail from "./components/Expenses/ExpenseMasterDetail.js";
import NewExpense from './components/InputExpense/NewExpense.js';
import ExpenseYearFilter from './components/InputExpense/ExpenseYearFilter.js';

const DUMMY_DATA = [
  {
    title: "fireball handle",
    amount: "24.99",
    date: new Date()
  },
  {
    title: "round table pizza",
    amount: "21.99",
    date: new Date()
  },
  {
    title: "gas",
    amount: "44.99",
    date: new Date()
  },
  {
    title: "flowers",
    amount: "84.99",
    date: new Date()
  },
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_DATA);

  const addNewExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => {return [expense, ...prevState];});
  }
  return (
    <div>
      <NewExpense onNewExpense={addNewExpenseHandler}/>
      <h2> Let 's get started!</h2> <p> This is also visible </p>
      <ExpenseMasterDetail arrObj={expenses}/>
      {/*
      <ExpenseLineItem arrayObj={expensesArray[0]}/>
      <ExpenseLineItem arrayObj={expensesArray[1]}/>
      <ExpenseLineItem arrayObj={expensesArray[2]}/>
      <ExpenseLineItem arrayObj={expensesArray[3]}/>
      */}
    </div>
  );
}
export default App;
