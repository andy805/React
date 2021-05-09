import ExpenseLineItem from './ExpenseLineItem.js';
import Card from '../UI/Card.js';
import './ExpenseMasterDetail.css';

function ExpenseMasterDetail(prop) {
  return (
    <Card className="ExpenseMasterDetail">
    <ExpenseLineItem arrayObj={prop.arrObj[0]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[1]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[2]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[3]}/>
    </Card>
  );
}

export default ExpenseMasterDetail;
