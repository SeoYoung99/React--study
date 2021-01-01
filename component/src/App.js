import React from "react";
import MyComponent from "./MyComponent"; // 컴포넌트 불러오기

/* < 화살표 함수 > : 자신이 종속된 인스턴스를 가리킴, 가독성 up
  functoin twice(value) {
    return value * 2;
  }
  
  const triple = (value) => value  * 3;
 */
const App = () => {
  return <MyComponent />;
};

/* 
  function App() {
    return <MyComponent />
  }
*/

export default App;
