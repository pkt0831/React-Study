/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
// import React, { useState, useRef } from "react";
// import "./App.css";

// const App = () => {
//   const LoginRef = useRef();
//   const [login, setState] = useState([
//     { _id: pkt0831, pw: 1234, active: false },
//   ]);
//   const _initlogin = () => {};
//   const handleId = () => {
//     // eslint-disable-next-line no-console
//     console.log("사용자 아이디 입력중");
//   };
//   const handlePw = () => {
//     // eslint-disable-next-line no-console
//     console.log("사용자 비밀번호 입력중");
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // eslint-disable-next-line no-console
//     console.log("로그인 시도중");
//     // eslint-disable-next-line no-alert
//     alert("로그인 시도!");
//   };
//   return (
//     <div className="pad">
//       <header className="header">
//         <h4 className="h4">로그인요망</h4>
//       </header>
//       <div>
//         <h1>로그인</h1>
//       </div>
//       <div className="wrap">
//         <form className="formStyle" onSubmit={handleSubmit}>
//           <h2>아이디</h2>
//           <input type="text" className="inputStyle" onChange={handleId} />
//           <h3>패스워드</h3>
//           <input type="text" className="inputStyle" onChange={handlePw} />
//           <button className="buttonStyle" type="submit">
//             로그인하기
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default App;

import React, { useState, useRef } from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  const todoInputRef = useRef();
  const [todo, setState] = useState([
    { _id: 0, title: "치킨먹기", active: false },
    { _id: 1, title: "피자먹기", active: false },
    { _id: 2, title: "햄버거먹기", active: false },
  ]);
  const addTodo = () => {
    const newToDoTitle = todoInputRef.current.value;
    const nextId = todo[todo.length - 1]._id + 1;
    const newTodo = {
      _id: nextId,
      title: newToDoTitle,
      active: false,
    };
    todoInputRef.current.value = "";
    setState(todo.concat(newTodo));
    const changeActive = () => {
      console.log(1);
    };
  };
  const inputpress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="App">
      <h2 className="Title">{"오늘의 할 일"}</h2>
      {todo.map((td, i) => (
        <Todo todo={td} idx={i} key={td._id} />
      ))}

      <input
        className="addToDoInput"
        type="text"
        name="addTodo"
        ref={todoInputRef}
        onKeyPress={inputpress}
      />
      <button className="addToDoButton" onClick={addTodo}>
        {"할일 추가"}
      </button>
    </div>
  );
};

export default App;
