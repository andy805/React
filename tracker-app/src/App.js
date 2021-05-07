import ExpenseItem from "./components/ExpenseItem.js";

const expensesArray = [
  {
    title: "fireball handle",
    amount: "24.99",
    date: new Date()
  },
  {
    title: "round table pizza",
    amount: "21.99",
    date: new Date()
  },
  {
    title: "gas",
    amount: "44.99",
    date: new Date()
  },
  {
    title: "flowers",
    amount: "84.99",
    date: new Date()
  },
];

function App() {
  return (
    <div>
      <h2> Let 's get started!</h2> <p> This is also visible </p>
      <ExpenseItem arrayObj={expensesArray[0]}> </ExpenseItem>
      <ExpenseItem arrayObj={expensesArray[1]}> </ExpenseItem>
      <ExpenseItem arrayObj={expensesArray[2]}> </ExpenseItem>
      <ExpenseItem arrayObj={expensesArray[3]}> </ExpenseItem>
    </div>
  );
}
export default App;
