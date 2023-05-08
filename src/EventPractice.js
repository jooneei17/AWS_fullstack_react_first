import React, { Component } from "react";

class EventPractice extends Component {
  state = { message: "", username: "" };

  // 1. 아래처럼 생성자를 작성하는 경우

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this); //this이벤트를 함께 바인딩해야 undefined를 바인드하지 않는다.
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  // transform-class-properties 문법을 사용하여 화살표함수 형태로 메서드 정의
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({ message: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default EventPractice;

// import React from "react";

// const EventPractice = () => {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         name="message"
//         placeholder="아무거나 입력해보세요"
//         onChange={(e) => {
//           console.log(e);
//           console.log(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default EventPractice;
