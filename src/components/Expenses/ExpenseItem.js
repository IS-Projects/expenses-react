import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = ({ title, date, amount }) => {
  const [expTitle, setExpTitle] = useState(title);

  const clickHandler = () => {
    setExpTitle("Updated!");
    console.log(expTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Click here!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
