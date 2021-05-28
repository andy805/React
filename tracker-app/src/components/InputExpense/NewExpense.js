
import ExpenseInput from './ExpenseInput'
import './NewExpense.css';

const NewExpense = (props) => {

  const expenseInputSubmitHandler = (expenseData) => {
    const ExpenseLineItem = {
      ...expenseData,
      id: Math.random()
    };
    console.log(ExpenseLineItem);
    props.onNewExpense(ExpenseLineItem);
  };

  return (
    <div>
      <ExpenseInput onExpenseInputSubmit={expenseInputSubmitHandler}/>
    </div>
  )
}


export default NewExpense;
