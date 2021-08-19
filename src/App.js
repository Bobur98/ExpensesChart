import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 294.12,
    date: new Date(2020, 2, 4),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: 394.12,
    date: new Date(2021, 5, 24),
  },
  {
    id: "e4",
    title: "New Desk(wooden)",
    amount: 450,
    date: new Date(2021, 8, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div>
        <NewExpenses onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} date={DUMMY_EXPENSES.date} />
      </div>
    </div>
  );
}

export default App;
