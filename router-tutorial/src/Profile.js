import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고정 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  //라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params값을 참조
  //match객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 있다.
  const Profile = data[username]; //data[velopert] or data[gildong]
  if (!Profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({Profile.name})
      </h3>
      <p>{Profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
