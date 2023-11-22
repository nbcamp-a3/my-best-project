import React from 'react';
import { data } from './DummyData';
import { StImg, StContainer, StContent, StTitle, StAllContent } from './styles';
import BoardDetailBtn from './BoardDetailBtn';
import BoardDetailGoListBtn from './BoardDetailGoListBtn';

export default function BoardDetailContent() {
  const dummyData = data;
  return (
    <div>
      {dummyData.map((data) => {
        return (
          <StContainer key={data.uid}>
            <StAllContent>
              <div>
                <StImg src={data.img} alt="이미지" />
              </div>
              <StTitle>{data.title}</StTitle>
              <StContent>{data.content}</StContent>
            </StAllContent>
            <BoardDetailBtn />
          </StContainer>
        );
      })}
      <BoardDetailGoListBtn />
    </div>
  );
}
