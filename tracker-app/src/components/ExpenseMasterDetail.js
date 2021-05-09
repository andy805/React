import ExpenseLineItem from './ExpenseLineItem.js';

function ExpenseMasterDetail(prop) {
  return (
    <div>
    <ExpenseLineItem arrayObj={prop.arrObj[0]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[1]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[2]}/>
    <ExpenseLineItem arrayObj={prop.arrObj[3]}/>
    </div>
  );
}

export default ExpenseMasterDetail;
