import React, { useState } from "react";

const EventPractice = () => {
  //함수형 컴포넌트
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form; //form 객체

  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기 (key값은 name이 가리키는 값)
    };
    setForm(nextForm); // 위에서 선언한 객체를 인자로 setForm함수 실행
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트연습 - 함수형 컴포넌트</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username} //객체 전달
        onChange={onChange} //name = username이므로 username = 입력값, nextForm을 받은 setForm실행
      />
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={onChange} //name = message이므로 message = 입력값, nextForm을 받은 setForm실행
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
