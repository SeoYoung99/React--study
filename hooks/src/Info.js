import React from "react";
import useInputs from "./useInputs";
/*
function reducer(state, action) {
  // 리듀서 함수
  return {
    ...state, // 기존값 복사하고
    [action.name]: action.value, // [e.target.name]: e.target.value 와 유사
    // input중 name을 key값으로 써서 입력된 값을 state의 해당 key에 해당하는 곳에 업데이트
  };
}*/
const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "", //기본값
  });

  const { name, nickname } = state; //객체
  /*
  const onChange = (e) => {
    dispatch(e.target); //이벤트 객체가 지니고 있는 e.target값 자체를 액션값으로 사용
    //액션값을 받으면 reducer함수 호출
  }; */
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름</b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
