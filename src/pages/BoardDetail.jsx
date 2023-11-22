import React from 'react';
import BoardDetailContent from 'components/BoardDetail/BoardDetailContent';
import { StBoardDetailMain, StGoListBtn } from 'components/BoardDetail/styles';

export default function BoardDetail() {
  return (
    <StBoardDetailMain>
      <BoardDetailContent />
      <StGoListBtn>목록으로</StGoListBtn>
    </StBoardDetailMain>
  );
}
