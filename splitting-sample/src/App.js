import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react"; //클래스형 컴포넌트로 전환

class App extends Component {
  state = {
    SplitMe: null,
  };
  handleClick = async () => {
    //배누에서 SpliMe 컴포넌트를 불러와 state에 넣어줌
    const loadModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadModule.default,
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && (
            <SplitMe
            //SplitMe가 유효하다면 렌더링
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
