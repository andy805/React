import './ExpenseDateItem.css'

function ExpenseDateItem(prop){

  return (
      <div className="dateItem">
        <h3 className="dateItemMonth">
          {prop.date.toLocaleDateString("en-US", { month: "long" })}{" "}
        </h3>
        <h1 className="dateItemDay">
          {prop.date.toLocaleDateString("en-US", { day: "numeric" })}{" "}
        </h1>
        <h4 className="dateItemYear">
          {prop.date.toLocaleDateString("en-US", {year: "numeric"})}
          </h4>
      </div>
  );
}

export default ExpenseDateItem;
