import './ExpenseLineItem.css';
import ExpenseDateItem from './ExpenseDateItem';
import Card from '../UI/Card'

function ExpenseLineItem(prop) {
  return (
    <Card className="expenseLineItem">
      <ExpenseDateItem date={prop.arrayObj.date} />
      <h2 className="expenseLineItemDescription"> {prop.arrayObj.title} </h2>
      <p> ${prop.arrayObj.amount} </p>
    </Card>
  );
}

export default ExpenseLineItem;
