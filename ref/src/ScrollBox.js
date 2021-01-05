import React, { Component } from "react";

class Scrollbox extends Component {
  scrollToBottom = () => {
    //스크롤바를 맨 아래로 내리는 메서드
    const { scrollHeight, clientHeight } = this.box;
    /* 비구조화 할당 문법
            const scrollHeight = this.box.scrollHeight
            const clientHeight = this.box.clientHeight
         */
    this.box.scrollTop = clientHeight - scrollHeight;
  }; //scrollTop: 세로 스크롤바 위치

  render() {
    const style = {
      //인라인 스타일링
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style} //이 요소의 스타일은 style
        ref={(ref) => {
          //이 요소는 이제 this.box를 통해 접근 가능
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default Scrollbox;
