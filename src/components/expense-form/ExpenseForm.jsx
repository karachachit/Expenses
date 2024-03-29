import React, { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveExpense = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      price,
      date,
    };
    props.newExpenseData(expenseData);

    setTitle("");
    setPrice("");
    setDate("");
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    props.onShowForm();
  };

  return (
    <form className="expense-form">
      <div className="expense-form_input">
        <FormInput
          id="text"
          labelName="Название"
          inputType="text"
          placeholder="Введите ..."
          value={title}
          onChange={titleChangeHandler}
        />

        <FormInput
          id="price"
          labelName="Цена"
          inputType="number"
          value={price}
          onChange={priceChangeHandler}
        />

        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          min="2019-01-01"
          max="2023-12-31"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>

      <div className="buttons">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Добавить расходы" onClick={saveExpense} />
      </div>
    </form>
  );
};

export default ExpenseForm;
