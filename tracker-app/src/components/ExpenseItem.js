function ExpenseItem(prop) {
  return (
    <div>
      <div>
        <h3>
          {prop.arrayObj.date.toLocaleDateString("en-US", { month: "long" })}{" "}
        </h3>
        <h1>
          {prop.arrayObj.date.toLocaleDateString("en-US", { day: "numeric" })}{" "}
        </h1>
      </div>
      <h2> {prop.arrayObj.title} </h2>
      <p> ${prop.arrayObj.amount} </p>
    </div>
  );
}

export default ExpenseItem;
