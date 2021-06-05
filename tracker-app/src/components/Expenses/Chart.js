import React from 'react';
import ChartBar from './ChartBar.js';
import './Chart.css';

/* props --- number of bars */

const Chart = (props) => {
  // the chart needs a label for each bar, an array of expenses for the year,
  const expenseByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const arrayOfMonths = [
    {label: "jan", value:0},
    {label: "Feb", value:0},
    {label: "Mar", value:0},
    {label: "Apr", value:0},
    {label: "May", value:0},
    {label: "Jun", value:0},
    {label: "Jul", value:0},
    {label: "Aug", value:0},
    {label: "Sep", value:0},
    {label: "Oct", value:0},
    {label: "Nov", value:0},
    {label: "Dec", value:0},
  ]

  for (let i = 0; i < props.expenseList.length; i++) {
    switch (props.expenseList[i].date.getMonth()) {
      case 0:
        expenseByMonth[0] = expenseByMonth[0] + Number(props.expenseList[i].price);
        break;
      case 1:
        expenseByMonth[1] = expenseByMonth[1] + Number(props.expenseList[i].price);
        break;
      case 2:
        expenseByMonth[2] = expenseByMonth[2] + Number(props.expenseList[i].price);
        break;
      case 3:
        expenseByMonth[3] = expenseByMonth[3] + Number(props.expenseList[i].price);
        break;
      case 4:
        expenseByMonth[4] = expenseByMonth[4] + Number(props.expenseList[i].price);
        break;
      case 5:
        expenseByMonth[5] = expenseByMonth[5] + Number(props.expenseList[i].price);
        break;
      case 6:
        expenseByMonth[6] = expenseByMonth[6] + Number(props.expenseList[i].price);
        break;
      case 7:
        expenseByMonth[7] = expenseByMonth[7] + Number(props.expenseList[i].price);
        break;
      case 8:
        expenseByMonth[8] = expenseByMonth[8] + Number(props.expenseList[i].price);
        break;
      case 9:
        expenseByMonth[9] = expenseByMonth[9] + Number(props.expenseList[i].price);
        break;
      case 10:
        expenseByMonth[10] = expenseByMonth[10] + Number(props.expenseList[i].price);
        break;
      case 11:
        expenseByMonth[11] = expenseByMonth[11] + Number(props.expenseList[i].price);
        break;
      default:
      let j = 0;

    }
  }

  for(let i = 0; i <arrayOfMonths.length ; i++){
    arrayOfMonths[i].value = expenseByMonth[i];
  }

  let maxHeight = Math.max(...expenseByMonth);

  if(maxHeight < 0){
    return ( <h2>Something went wrong with max height{maxHeight}</h2>)
  }
  return (
    <div className="chart">
      {arrayOfMonths.map(monthExpense => {return (
        <ChartBar key={monthExpense.label} label={monthExpense.label} total={monthExpense.value} max={maxHeight}/>)})}
  </div>

  )


}

export default Chart;
