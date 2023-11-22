import React from 'react';
import {
  StAllboardIndex,
  StAllboardIndexBox,
  StAllboardIndexes,
  StWriteButton,
} from './styles';

export default function AllBoardIndex() {
  return (
    <StAllboardIndexBox>
      <StAllboardIndexes>
        <StAllboardIndex>PROJECT</StAllboardIndex>
        <StAllboardIndex>개인로그</StAllboardIndex>
        <StAllboardIndex>팀로그</StAllboardIndex>
        <StAllboardIndex>알고리즘</StAllboardIndex>
        <StAllboardIndex>튜터평가</StAllboardIndex>
      </StAllboardIndexes>
      <StWriteButton>글쓰기</StWriteButton>
    </StAllboardIndexBox>
  );
}
