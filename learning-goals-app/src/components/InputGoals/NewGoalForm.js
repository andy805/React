import React, {useState} from 'react';

const NewGoalForm = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (ev) => {
    setGoal(ev.target.value);
  }

  const formSubmitHandler = (ev) => {
    ev.preventDefault(); //vanilla Js that prevents the page from reloading
    const newGoal = {
      goal: goal,
      id: "GOL" + String(props.counter)
    };
    props.addGoal(newGoal);

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
      <label>What is your goal</label>
      <input type="text"  value={goal} onChange={goalInputHandler}/>
    </div>
    <button type="submit"> + Add Goal </button>
    </form>
  )


}

export default NewGoalForm;
