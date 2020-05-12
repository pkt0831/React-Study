/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, userRef } from "react";
import "./App.css";
import Header from "./component/Header";

const App = () => {
  const [headerState, setHeaderState] = useState({
    isLogin: false,
    loginId: "",
  });
  const { isLogin, loginId } = headerState;
  const [state, setState] = useState([
    { _id: 0, id: "pkt0831", password: "1234" },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [userState, setUserState] = useState([{ id: "", password: "" }]);

  const handleLogin = () => {
    const { id, password } = userState;
    console.log(id, password);
    state.filter((user) =>
      user.id === id && user.password === password
        ? changeHeader(user.id)
        : alert("로그인 실패"),
    );
  };
  const handleId = (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    console.log("사용자 아이디 입력중");
    setUserState({
      ...userState,
      id: e.target.value,
    });
  };
  const handlePw = (e) => {
    // eslint-disable-next-line no-console
    console.log("사용자 비밀번호 입력중");
    setUserState({
      ...userState,
      password: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("로그인 시도중");
    // eslint-disable-next-line no-alert
  };
  const logout = () => {
    setHeaderState({
      isLogin: false,
      password: "",
    });
  };
  const handleUserAcount = () => {
    setHeaderState({
      // isLogin: true,
      // loginId: id,
    });
  };
  const changeHeader = (id) => {
    setHeaderState({
      isLogin: true,
      loginId: id,
    });
    setUserState({
      id: "",
      password: "",
    });
  };
  return (
    <div className="pad">
      <div>
        <Header isLgoin={isLogin} id={loginId} logout={logout} />
        {isLogin ? (
          <Todo />
        ) : (
          <Login
            handleLogin={handleLogin}
            handleUserAcount={handleUserAcount}
            userState={userState}
          />
        )}
      </div>
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
