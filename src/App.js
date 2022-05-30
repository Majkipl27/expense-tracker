import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/AddingExpense/NewExpense";
import { useState } from "react";

function App() {
  const InitialExpenses = [
    // {
    //   id: "e1",
    //   title: "Toilet Paper",
    //   amount: 94.12,
    //   date: new Date(2020, 7, 14),
    // },
    // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    // {
    //   id: "e3",
    //   title: "Car Insurance",
    //   amount: 294.67,
    //   date: new Date(2021, 2, 28),
    // },
    // {
    //   id: "e4",
    //   title: "New Desk (Wooden)",
    //   amount: 450,
    //   date: new Date(2021, 5, 12),
    // },
  ];

  const [expenses, setExpenses] = useState(InitialExpenses);

  const addExpenseHandler = expense =>{
    setExpenses(PrevExpenses =>{
      return [expense, ...PrevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
