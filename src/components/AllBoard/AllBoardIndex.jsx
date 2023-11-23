import React from 'react';
import {
  StAllboardIndex,
  StAllboardIndexBox,
  StAllboardIndexes,
  StWriteButton,
} from './styles';
import { useDispatch } from 'react-redux';
import { changeCategory } from 'redux/modules/selectedCategory';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: '개인로그',
    value: 'project',
  },
  {
    name: '팀로그',
    value: 'teamproject',
  },
  {
    name: '알고리즘',
    value: 'algorithm',
  },
  {
    name: '튜터코멘트',
    value: 'tutor',
  },
];

export default function AllBoardIndex() {
  const navigates = useNavigate();
  const dispatch = useDispatch();
  const clickCategory = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <StAllboardIndexBox>
      <StAllboardIndexes>
        {categories.map((category, index) => (
          <StAllboardIndex
            onClick={() => clickCategory(category.value)}
            key={index}
          >
            {category.name}
          </StAllboardIndex>
        ))}
      </StAllboardIndexes>
      <StWriteButton onClick={() => navigates(`/boards/new`)}>
        글쓰기
      </StWriteButton>
    </StAllboardIndexBox>
  );
}
