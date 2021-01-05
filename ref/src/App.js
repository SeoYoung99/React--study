import React, { Component } from "react";
import Scrollbox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <Scrollbox ref={(ref) => (this.scrollbox = ref)} />
        {/* 컴포넌트에 ref 달기 */}
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          {/* this.scrollbox를 통해 Scrollbox에 접근하고 배부 메서드 사용 */}
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;
