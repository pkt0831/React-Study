/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./Todo.css";

const Todo = ({ todo, idx, changeActive, deleteTodo }) => {
  return (
    <div>
      <h3>
        {idx + 1}
        {":  "}
        {todo.title}
        {"   "}
        {todo.active == false ? (
          <span className={"active"}>{"안함"}</span>
        ) : (
          <span className={"inactive"}>{"함"}</span>
        )}
        <button
          className={"innerButton"}
          onClick={() => {
            changeActive(todo._id);
          }}
        >
          check
        </button>
        <button
          className={"activeButton"}
          onClick={() => {
            deleteTodo(todo._id);
          }}
        >
          X
        </button>
      </h3>
    </div>
  );
};

export default Todo;
