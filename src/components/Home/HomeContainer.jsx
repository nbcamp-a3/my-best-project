import React from 'react';
import {
  StHomeContainer,
  StGoToListBtn,
  StCommentBtnBox,
} from 'components/Home/style';
import MainContent from './MainContent';
import ContentContainer from './ContentContainer';
import { StPtag } from 'components/Home/style';
import { useNavigate } from 'react-router';

export default function HomeContainer() {
  const navigate = useNavigate();

  return (
    <StHomeContainer>
      <MainContent />
      <StCommentBtnBox>
        <StPtag>다른 팀들의 프로젝트를 구경해 보세요!</StPtag>
        <StGoToListBtn
          onClick={() => {
            navigate('/boards');
          }}
        >
          더보기
        </StGoToListBtn>
      </StCommentBtnBox>
      <ContentContainer />
    </StHomeContainer>
  );
}
