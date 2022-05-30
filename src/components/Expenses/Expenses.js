import Card from "../UI general/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  const filterChangeHandler = selectedYear =>{
    setEnteredYear(selectedYear);
  }

  const returnYear = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterChangeHandler} select={enteredYear} />
      <ExpensesChart expenses={returnYear} />
      <ExpensesList items = {returnYear}/>
    </Card>
  );
};

export default Expenses;
