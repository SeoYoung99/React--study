import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  //스타일 정의
  display: flex;
  .thumbnail {
    //클래스명
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    //사이 스타일링
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  //props로 받아온 article
  const { title, description, url, urlToImage } = article; //객체 선언
  return (
    <NewsItemBlock //전체를 위에서 정의한 스타일로 감싸줌
    >
      {urlToImage && ( //가져온 객체를 스타일링과 함께 조건부로 사용
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
