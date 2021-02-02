import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsLsitBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  // articles라는 상태 선언
  const [loading, setLoading] = useState(false);
  // loadinf이라는 상태 선언 (API요청이 대기중인지 판별)

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&apiKey=66cd214b91f0456ba0db9077554010dd',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기 중일 때
  if (loading) {
    return <NewsLsitBlock> 대기 중...</NewsLsitBlock>;
  }
  //아직 articles값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  //articles값이 유효할 때
  return (
    <NewsLsitBlock>
      {articles.map((article) => (
        <NewsItem key={articles.url} article={article} />
      ))}
    </NewsLsitBlock>
  );
};
export default NewsList;
