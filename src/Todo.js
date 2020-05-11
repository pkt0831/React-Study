/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div>
      <h3>
        {todo._id}
        {":  "}
        {todo.title}
        {"   "}
        {todo.active == false ? (
          <span className={"active"}>{"안함"}</span>
        ) : (
          <span className={"inactive"}>{"함"}</span>
        )}
        <button className={"innerButton"} onKeyPress={"changeActive"}>
          check
        </button>
        <button className={"activeButton"}>X</button>
      </h3>
    </div>
  );
};

export default Todo;
