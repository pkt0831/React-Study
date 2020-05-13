/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef } from "react";
import "./Todo.css";

const Todo = () => {
  // const [boardState, setBoardState] = useState([]);
  // const [boardTitleState, setBoardTitleState] = useState("");
  const todoInputRef = useRef();
  const [todo, setState] = useState([
    { _id: 0, title: "치킨먹기", active: false },
    { _id: 1, title: "피자먹기", active: false },
    { _id: 2, title: "햄버거먹기", active: false },
    { _id: 3, title: "햄버거버리기", active: false },
  ]);

  // const addBoard = async () => {
  //   let { boardTitleState: title } = boardTitleState;
  //   if (!title) {
  //     alert("제목을 입력하세요.");
  //     return false;
  //   }
  //   await setBoardState([
  //     ...boardState,
  //     {
  //       _id: date.getTime(),
  //       title: title,
  //     },
  //   ]);
  // };
  // const changeEnter = (e) => {
  //   console.log("검색중");
  //   if (e.key === "Enter") {
  //     console.log("enter");
  //     addBoard();
  //     boardTitleRef.current.value = "";
  //   }
  // };
  const changeKeyup = (e) => {
    if (e.key === "Enter") {
      console.log("엔터");
      // addBoard();
      // boardTitleRef.current.value = "";
    }
  };
  return (
    <div className="wrap">
      <h1 className="board">New Board</h1>
      <input className="boardInput" placeholder="보드 제목을 입력하세요" />
      <ul className="todayInfo" />
      <ul className="tomorrowInfo">
        {todo.map((td) => (
          <li>{td.title}</li>
        ))}
        {/* <h3>내일 식단 지우기</h3>
        <input /> */}
      </ul>
    </div>
  );
};

export default Todo;
