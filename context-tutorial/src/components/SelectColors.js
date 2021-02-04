import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//변경사항1
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  //변경사항2
  handleClick = (color) => {
    //this.setState({
    //  color: getRandomColor(),
    //});
    this.context.actions.setColor(getRandomColor());
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
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
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
          <button onClick={this.handleClick}>랜덤색상!</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
