/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import "./App.css";

const App2 = () => {
  const [state, setState] = useState({
    userName: "?",
    address: "?",
  });
  const { userName, address } = state;
  const _reset = () => {
    console.log("초기화 실행");
    setState({
      userName: "?",
      address: "?",
    });
  };
  const _change = (e) => {
    console.log("값 변경");
    const { value, name } = e.target;
    console.log(value, name);
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className="App2">
      <label>이름</label>
      <input type="text" name="userName" onChange={_change} />
      <br />
      <label>사는곳</label>
      <input type="text" name="address" onChange={_change} />
      <button onClick={_reset}>초기화</button>
      <br />
      <h3>
        {address}
        {" 에 거주하고 있는 "}
        {userName}
      </h3>
    </div>
  );
};

export default App2;
