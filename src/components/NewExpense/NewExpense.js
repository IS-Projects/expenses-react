import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
    console.log("button clicked!");
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onDisplayForm={setShowForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
