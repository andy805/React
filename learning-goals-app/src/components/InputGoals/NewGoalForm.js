import React from 'react';

const NewGoalForm = (props) => {

  const formSubmitHandler = (ev) => {
    ev.preventDefault(); //vanilla Js that prevents the page from reloading
  }

  return (
    <form>
      <div>
      <label>What is your goal</label>
      <input type="text" />
    </div>
    <button type="submit"> + Add Goal </button>
    </form>
  )


}

export default NewGoalForm;
