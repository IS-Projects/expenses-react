import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
