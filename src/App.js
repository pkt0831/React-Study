/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  handleSubmitChange = () => {
    // eslint-disable-next-line no-console
    console.log('사용자 아이디 입력중');
  };

  render() {
    return (
      <>
        <div>
          <h1>로그인</h1>
        </div>
        <div className={st('wrap')}>
          <form classNAme={st('formStyle')} onSubmit={this.handleSubmit}>
            <h2>ID:</h2>
            <input
              type="text"
              className={st('inputStyle')}
              onSubmit={this.handlePw}
            />
            <h3>PASS</h3>
            <input
              type="text"
              className={st('inputStyle')}
              onSubmit={this.handleLogin}
            />
            <button className={st('buttonStyle')}>로그인하기</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
