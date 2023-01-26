import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  const hideExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && <button type="button" onClick={showExpenseFormHandler}>Add Expense</button>}
      {showExpenseForm && <ExpenseForm onCancel={hideExpenseFormHandler} onSaveExpenseData={onSaveExpenseData} />}
    </div>
  );
};

export default NewExpense;
