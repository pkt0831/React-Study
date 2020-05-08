import React from 'react';
import './App.css';

const App = () => {
  const handleId = () => {
    // eslint-disable-next-line no-console
    console.log('사용자 아이디 입력중');
  };

  const handlePw = () => {
    // eslint-disable-next-line no-console
    console.log('사용자 비밀번호 입력중');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('로그인 시도중');
    // eslint-disable-next-line no-alert
    alert('로그인 시도!');
  };
  return (
    <div className="pad">
      <header className="header">
        <h4 className="h4">로그인</h4>
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
          <button className="buttonStyle" type="submit">
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import ButtonChild01 from './ButtonChild01';
// import ButtonChild02 from './ButtonChild02';

// const AppStyle = {
//   border: '1px solid #333',
//   padding: 100,
//   margin: 100,
// };
// class App extends Component {
//   render() {
//     return (
//       // eslint-disable-next-line no-undef
//       <div className="App" style={AppStyle}>
//         <h2>부모 컴포넌트</h2>
//         <ButtonChild01 title="주황색 버튼" />
//         <ButtonChild02 title="노란색 버튼" />
//       </div>
//     );
//   }
// }

// export default App;
