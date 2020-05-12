import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state] = useState([{ _id: 0, id: "pkt0831", password: "1234" }]);
  const [userState] = useState([{ id: "", password: "" }]);

  const handleLogin = () => {
    const { id, password } = userState;
    state.filter((user) =>
      user.id === id && user.password === password
        ? alert("로그인 성공")
        : alert("로그인 실패"),
    );
  };
  const handleId = () => {
    // eslint-disable-next-line no-console
    console.log("사용자 아이디 입력중");
  };
  const handlePw = () => {
    // eslint-disable-next-line no-console
    console.log("사용자 비밀번호 입력중");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("로그인 시도중");
    // eslint-disable-next-line no-alert
    alert("로그인 시도!");
  };
  return (
    <div className="pad">
      <header className="header">
        <h4 className="h4">로그인요망</h4>
      </header>
      <div>
        <h1>로그인</h1>
      </div>
      <div className="wrap">
        <form className="formStyle" onSubmit={handleSubmit}>
          <h2>아이디</h2>
          <input type="text" className="inputStyle" onChange={handleId} />
          <h3>패스워드</h3>
          <input type="text" className="inputStyle" onChange={handlePw} />
          <button className="buttonStyle" type="submit" onClick={handleLogin}>
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
};
export default App;
