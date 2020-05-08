/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ButtonChild01 extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    title: this.props.title,
    // eslint-disable-next-line react/destructuring-assignment
    color: this.props.color,
  };

  handleButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log('Button Child01 클릭!');
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    // eslint-disable-next-line react/destructuring-assignment
    if (check.test(this.state.title)) {
      // eslint-disable-next-line no-console
      console.log('한글');
      this.setState({
        title: 'Purple Button',
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('영어');
      this.setState({
        title: '보라색 버튼',
      });
    }
  };

  render() {
    const { title, color } = this.state;
    const ButtonStyle = {
      border: 'none',
      width: 100,
      height: 30,
      background: color,
    };
    return (
      // eslint-disable-next-line react/button-has-type
      <button style={ButtonStyle} onClick={this.handleButtonClick}>
        {title}
      </button>
    );
  }
}

ButtonChild01.defaultProps = {
  title: '이름없음 버튼',
};

export default ButtonChild01;
