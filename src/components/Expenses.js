import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
