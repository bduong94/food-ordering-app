import React from "react";
import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  return (
    <li className={classes.meal}>
      <h3>{name}</h3>
      <p className={classes.description}>{description}</p>
      <p className={classes.price}>{price}</p>
    </li>
  );
};

export default MealItem;
