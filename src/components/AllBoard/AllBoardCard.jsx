import React from 'react';
import {
  StAllBoarId,
  StAllBoarTitle,
  StAllBoardContent,
  StAllBoardContentBox,
  StAllBoardImagePreview,
  StAllBoardItem,
  StAllBoardLikedButton,
  StAllBoardNameBox,
  StAllBoardTitleBox,
  StAllboardName,
  StAvatar,
  StTimeBox,
} from './styles';

export default function AllBoardCard({ data }) {
  return (
    <StAllBoardItem key={data.userid}>
      <StAllBoardNameBox>
        <StAllboardName>
          <StAvatar $src={data.avatar}></StAvatar>
          <StAllBoarId>{data.userid}</StAllBoarId>
        </StAllboardName>
        <StTimeBox>
          <time>
            {new Date(data.createdAt).toLocaleDateString('ko', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </time>
          <StAllBoardLikedButton>❤️</StAllBoardLikedButton>
        </StTimeBox>
      </StAllBoardNameBox>
      <StAllBoardContentBox>
        <StAllBoardTitleBox>
          <StAllBoarTitle>{data.title}</StAllBoarTitle>
          <StAllBoardContent>{data.content}</StAllBoardContent>
        </StAllBoardTitleBox>
        <StAllBoardImagePreview $src={data.img}></StAllBoardImagePreview>
      </StAllBoardContentBox>
    </StAllBoardItem>
  );
}
