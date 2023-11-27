import React from 'react';
import {
  StAllboardIndex,
  StAllboardIndexBox,
  StAllboardIndexWrapper,
  StAllboardIndexes,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from 'redux/modules/selectedCategory';

export const categories = [
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
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const clickCategory = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <StAllboardIndexWrapper>
      <StAllboardIndexBox>
        <StAllboardIndexes>
          {categories.map((category, index) => (
            <StAllboardIndex
              onClick={() => clickCategory(category.value)}
              key={index}
              $isClicked={selectedCategory === category.value}
            >
              {category.name}
            </StAllboardIndex>
          ))}
        </StAllboardIndexes>
      </StAllboardIndexBox>
    </StAllboardIndexWrapper>
  );
}
