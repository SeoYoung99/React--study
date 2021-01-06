import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

//랜덤 색상을 생성
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000", //color state
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(), //랜덤 색상 생성해서 color state에
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>{" "}
        {/*버튼을 누르면 랜덤함수로 color 업데이트*/}
        <LifeCycleSample color={this.state.color} />{" "}
        {/* props로 랜덤색상을 받음 */}
      </div>
    );
  }
}
export default App;
