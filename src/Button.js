import React from "react";
import { useChange } from "./useChange";
import "./button.css";

export const Button = () => {
  const [doChange, changeTheText] = useChange();
  console.log("doChange:", doChange);
  const handleClick = (e) => {
    e.preventDefault();
    changeTheText();
  };
  return (
    <button onClick={handleClick}>{doChange ? "Remove me" : "Add me"}</button>
  );
};