import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color }; //부모에게서 받은 color값(props)을 state에 동기화
    }
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; //숫자의 마지막 자리가 4이면 렌더링하지 않는다.
  }
  componentWillUnmount() {
    console.log("componentWillUnMount");
  }
  handleclick = () => {
    this.setState({
      number: this.state.number + 1, //'더하기'버튼의 onClick이벤트핸들링을 위해 number state 업데이트
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //???
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color; //DOM요소의 변화 직전 색상을 snapshot으로 반환
      //myRef는 <h1>이고 그 요소에서의 color 반환
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot); //snapshot조회
    }
  }
  render() {
    console.log("render");
    const style = {
      color: this.props.color, // 부모에서 설정한 props로 스타일 설정
    };
    //의문: 위에처럼 간단히 this.props.color로 접근해서 쓰지 왜 state에 동기화를 시키는가?
    // props는 부모에서만 설정할 수 있어서?
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color} </p>
        {/* this.state.color대신 this.props.color라고 해도 되는데..?*/}
        <button onClick={this.handleclick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
