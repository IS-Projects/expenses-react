import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
