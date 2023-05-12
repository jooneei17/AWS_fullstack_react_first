import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  //카테고리가 선택되지 않았으면 기본 값  all로 사용
  const category = params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
