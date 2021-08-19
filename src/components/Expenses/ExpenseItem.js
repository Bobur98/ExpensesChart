import React, { useState } from "react";
import ExpanseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTittle] = useState(props.title);

  const clickHandler = () => {
    setTittle("updated");
  };
  return (
    <ul>
      <Card className="expense-item">
        <ExpanseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price"> ${props.amount} </div>
        </div>
        <button onClick={clickHandler}>change item</button>
      </Card>
    </ul>
  );
}

export default ExpenseItem;
