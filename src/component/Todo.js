/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
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
  const deleteRef = useRef();
  const [BoardState, setBoardState] = useState([]);
  const [todo, setState] = useState([
    { _id: 0, title: "김치찌개", active: false },
    { _id: 1, title: "미역국", active: false },
    { _id: 2, title: "콩밥", active: false },
    { _id: 3, title: "햄버거", active: false },
  ]);
  const [tomo, tomosetState] = useState([
    { _id: 0, title: "치킨", active: false },
    { _id: 1, title: "피자", active: false },
    { _id: 2, title: "햄버거", active: false },
    { _id: 3, title: "김밥", active: false },
  ]);
  const addTodo = () => {
    const newTodoTitle = todoInputRef.current.value;
    // eslint-disable-next-line no-underscore-dangle
    const nextId = todo[todo.length - 1]._id + 1;
    const newToDo = {
      _id: nextId,
      title: newTodoTitle,
      active: false,
    };
    console.log(newToDo);
    setState(todo.concat(newToDo));
    todoInputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    console.log(id);
    setBoardState(BoardState.map((td) => td._id !== _id));
    console.log(setBoardState);
  };

  const changeKeyup = (e) => {
    if (e.key === "Enter") {
      console.log("엔터");
      addTodo();
      // boardTitleRef.current.value = "";
    }
    // const deleteInfo = () => {
    //   console.log(1);
    // };
  };
  return (
    <div className="todoWrap">
      <h1 className="board">New Board</h1>
      <input className="boardInput" placeholder="보드 제목을 입력하세요" />
      <ul>
        <li className="todayInfo">
          <button className="addMenu"> 식단 추가하기</button>
          <ul>
            {todo.map((td) => (
              <li>{td.title}</li>
            ))}
            <input
              className="todayInput"
              onKeyUp={changeKeyup}
              ref={todoInputRef}
            />
          </ul>
        </li>
        <li className="tomorrowInfo">
          <ul>
            <button className="deleteMenu" onClick={deleteTodo} ref={deleteRef}>
              내일 식단 삭제하기
            </button>
            {tomo.map((td) => (
              <li>{td.title}</li>
            ))}
            <input className="tomorrowInput" />
            {/* <h3>내일 식단 지우기</h3>
        <input /> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
