import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider
      value={{ color: "red" }}
      // provider를 쓸 때는 반드시 value값을 명시해야함
    >
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};
export default App;
