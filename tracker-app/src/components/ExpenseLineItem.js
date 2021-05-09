import './ExpenseLineItem.css';
import ExpenseDateItem from './ExpenseDateItem';

function ExpenseLineItem(prop) {
  return (
    <div className="expenseLineItem">
      <ExpenseDateItem date={prop.arrayObj.date} />
      <h2 className="expenseLineItemDescription"> {prop.arrayObj.title} </h2>
      <p> ${prop.arrayObj.amount} </p>
    </div>
  );
}

export default ExpenseLineItem;
