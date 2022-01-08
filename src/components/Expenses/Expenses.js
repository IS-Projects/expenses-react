import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2022");
  const saveYearDataHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log("in Expenses.js");
    console.log(selectedYear);
  };
  return (
    <div>
      <ExpenseFilter onSaveYear={saveYearDataHandler} />
      <Card className="expenses">
        {items
          .filter((item) => item.date.getFullYear().toString() === year)
          .map((item, index) => (
            <ExpenseItem
              key={index}
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
