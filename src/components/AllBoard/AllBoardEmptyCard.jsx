import React from 'react';
import {
  StAllBoardContent,
  StAllBoardContentBox,
  StAllBoardEmptyItem,
  StAllBoardTitleBox,
} from './styles';

export default function AllBoardEmptyCard() {
  return (
    <StAllBoardEmptyItem>
      <StAllBoardContentBox>
        <StAllBoardTitleBox>
          <StAllBoardContent>게시물이 없습니다.</StAllBoardContent>
        </StAllBoardTitleBox>
      </StAllBoardContentBox>
    </StAllBoardEmptyItem>
  );
}
