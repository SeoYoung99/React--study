import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
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
        value={username} //input의 value = state에 있는 값
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력하세요."
        value={message} //input의 value = state에 있는 값
        onChange={onChangeMessage}
        onKeyPress={onKeyPress} //onKeyPress 이벤트 핸들링
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
