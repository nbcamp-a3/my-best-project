import React from 'react';
import BoardDetailContent from 'components/BoardDetail/BoardDetailContent';
import {
  StBoardDetailMain,
  StGoListBtn,
  StGoListBtnBox,
} from 'components/BoardDetail/styles';
import { Link } from 'react-router-dom';
import Comments from 'components/BoardDetail/Comments';

export default function BoardDetail() {
  return (
    <StBoardDetailMain>
      <BoardDetailContent />
      <Comments />
      <StGoListBtnBox>
        <Link to="/boards">
          <StGoListBtn>목록으로</StGoListBtn>
        </Link>
      </StGoListBtnBox>
    </StBoardDetailMain>
  );
}
