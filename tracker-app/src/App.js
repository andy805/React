import React,{useState} from 'react'
import ExpenseMasterDetail from "./components/Expenses/ExpenseMasterDetail.js";
import NewExpense from './components/InputExpense/NewExpense.js';
// import ExpenseYearFilter from './components/InputExpense/ExpenseYearFilter.js';

const DUMMY_DATA = [
  {
    title: "fireball handle",
    price: "24.99",
    date: new Date(),
    id:"D1"
  },
  {
    title: "round table pizza",
    price: "21.99",
    date: new Date(),
    id:"D2"
  },
  {
    title: "gas",
    price: "44.99",
    date: new Date(),
    id:"D3"

  },
  {
    title: "flowers",
    price: "84.99",
    date: new Date(),
    id:"D4"
  },
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_DATA);

  const addNewExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses(prevState => {
      console.log([expense, ...prevState]);
      return [expense, ...prevState];
    });
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
