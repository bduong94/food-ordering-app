import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = ({ name }) => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} obSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${name}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
