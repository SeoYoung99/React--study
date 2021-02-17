import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  //서버에서 리액트 컴포넌트를 렌더링할 때 사용하는 renderToString함수
  //이 함수에 JSX를 넣어서 호출하면 렌더링 결과를 문자열로 반환
  <div>Hello Server Side Rendering</div>
);

console.log(html);
