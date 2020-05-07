/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  handleId = () => {
    // eslint-disable-next-line no-console
    console.log('사용자 아이디 입력중');
  };

  handlePw = () => {
    // eslint-disable-next-line no-console
    console.log('사용자 비밀번호 입력중');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('로그인 시도중');
  };

  render() {
    return (
      <div className={st('pad')}>
        <div>
          <h1>로그인</h1>
        </div>
        <div className={st('wrap')}>
          <form classNAme={st('formStyle')} onSubmit={this.handleSubmit}>
            <h2>ID:</h2>
            <input
              type="text"
              className={st('inputStyle')}
              onChange={this.handleId}
            />
            <h3>PASS:</h3>
            <input
              type="text"
              className={st('inputStyle')}
              onChange={this.handlePw}
            />
            <button className={st('buttonStyle')} type="submit">
              로그인하기
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
