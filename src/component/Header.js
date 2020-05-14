/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ isLogin, id, logout }) => {
  const userId = id;
  console.log(isLogin, id);
  return (
    <header className="header">
      {isLogin ? (
        <h4 className="h4">{userId}</h4>
      ) : (
        <h4 className="h4">로그인요망</h4>
      )}
    </header>
  );
};

export default Header;
