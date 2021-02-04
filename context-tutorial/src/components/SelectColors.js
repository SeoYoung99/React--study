//Context의 actions에 넣어준 함수를 호출하는 컴포넌트를 만든다.
import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext; //contextType 사용하기

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetsubcolor = (subcolor) => {
    this.context.actions.Setsubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>

        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => this.handleSetColor(color)}
                onContextMenu={(e) => {
                  //마우스 오른쪽 버튼 클릭
                  e.preventDefault(); //마우스 오른쪽 버튼 클릭시 메뉴가 뜨는 것을 무시
                  this.handleSetSubcolor(color);
                }}
              />
            ))}
          </div>
        )}

        <hr />
      </div>
    );
  }
}
export default SelectColors;
