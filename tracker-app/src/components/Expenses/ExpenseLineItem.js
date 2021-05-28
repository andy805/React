
import React, {useState} from 'react';
import './ExpenseLineItem.css';
import ExpenseDateItem from './ExpenseDateItem';
import Card from '../UI/Card'

function ExpenseLineItem(prop) {

  const [title, setTitle] = useState(prop.arrayObj.title);

  function clickHandler() {
    setTitle("updated");
    console.log(title);
  }

  return (
    <Card className="expenseLineItem">
      <ExpenseDateItem date={prop.arrayObj.date} />
      <h2 className="expenseLineItemDescription"> {title} </h2>
      <p> ${prop.arrayObj.amount} </p>
      <button onClick={clickHandler}> click me </button>
    </Card>
  );
}

export default ExpenseLineItem;
