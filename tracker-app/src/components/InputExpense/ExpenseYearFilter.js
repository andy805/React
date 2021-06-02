// import React,{useState} from 'react';

const ExpenseYearFilter = (props) => {

  // const [year, setYear] = useState("");
  const filterYearHandler = (event) => {
    console.log(event.target.value);
    // setYear(event.target.value);
    // call parent function
    props.filter(event.target.value);
  };

  return (
    <div>
    <label>
      filter by year
    </label>
    <select value={props.selectedYear} onChange={filterYearHandler} >
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
    </select>
  </div>
  );

};

export default ExpenseYearFilter;
