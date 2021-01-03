import React from "react";
import MyComponent from "./MyComponent"; // 컴포넌트 불러오기

const App = () => {
  return (
    <MyComponent name="React" favoritenumber={1}>
      {/* favoritenumber를 필수props로 설정했으므로 적어주어야 한다! */}
      리액트
    </MyComponent>
  );
};

export default App;
