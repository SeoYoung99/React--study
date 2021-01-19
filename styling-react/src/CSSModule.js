import React from "react";
import styles from "./CSSModule.module.css";
const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      {" "}
      {/* 스타일 클래스를 적용하고 싶은 요소에 {styles.[클래스이름]} 형태로 전달 */}
      안녕하세요, 저는 <span className="something">CSS Module</span>
      {/* 글로벌은 그냥 넣어줌 */}
    </div>
  );
};
export default CSSModule;
