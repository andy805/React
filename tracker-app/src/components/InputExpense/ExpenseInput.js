//import './ExpenseInput.css'
import React, {useState} from 'react';

const ExpenseInput = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault(); //vanilla js
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredPrice
    };
    console.log(expenseData);
    setEnteredDate("");
    setEnteredPrice("");
    setEnteredTitle("");

    props.onExpenseInputSubmit(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input type = "text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div>
          <label>Price</label>
          <input type = "number" min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler}/>
        </div>
        <div>
          <label>Date</label>
          <input type = "date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div>
        <button type="submit">+ Add Expense</button>
      </div>
    </form>
  )
}


export default ExpenseInput;
