import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <u1>
      <li>
        <Link
          to="/red"
          //각 링크로 이동할 수 있게 해줌
        >
          Red
        </Link>
      </li>
      <li>
        <Link to="/blue">Blue</Link>
      </li>
    </u1>
  );
};
export default Menu;
