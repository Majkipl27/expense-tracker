import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const savedExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
  }

  const trueHandler = () =>{
    setIsAdding(true)
  }

  const falseHandler = () =>{
    setIsAdding(false);
  }

  return (
    <div className="new-expense">
      {isAdding === false ? (
        <button type="button" onClick={trueHandler} >
          Add Expense.
        </button>
      ) : (
        <ExpenseForm
          onSaveData={savedExpenseDataHandler}
          canceling={falseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
