import React, {useState} from 'react'
import ExpenseInput from './ExpenseInput'
import './NewExpense.css';

const NewExpense = (props) => {
  const [initState, setInitState] = useState(0);
  const expenseInputSubmitHandler = (expenseData) => {
    const ExpenseLineItem = {
      ...expenseData,
      id: Math.random()
    };
    console.log(ExpenseLineItem);
    props.onNewExpense(ExpenseLineItem);
  };

  const stateHandler = () => {
    setInitState(prevState => {
      if(prevState === 0)
      {
        return 1;
      }
      else
      {
        return 0;
      }
    });

  }




  return (
    <div>
      <ExpenseInput onExpenseInputSubmit={expenseInputSubmitHandler} onToggleFormHandler={stateHandler} state={initState}/>
    </div>
  )
}


export default NewExpense;
