import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2020");

  const saveYearDataHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log("in Expenses.js");
    console.log(selectedYear);
  };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === year
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onSaveYear={saveYearDataHandler} />
        {filteredItems.map((item) => (
          <ExpenseItem
            key={item.id}
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
