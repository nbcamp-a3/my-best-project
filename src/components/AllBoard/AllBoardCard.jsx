import React, { useEffect, useState } from 'react';
import {
  StAllBoarId,
  StAllBoarTitle,
  StAllBoardContent,
  StAllBoardContentBox,
  StAllBoardImagePreview,
  StAllBoardItem,
  StAllBoardNameBox,
  StAllBoardTitleBox,
  StAllboardName,
  StAvatar,
  StTimeBox,
} from './styles';
import { Link } from 'react-router-dom';

export default function AllBoardCard({ data }) {
  return (
    <StAllBoardItem key={data.userid}>
      <StAllBoardNameBox>
        <StAllboardName>
          <StAvatar $src={data.avatar}></StAvatar>
          <StAllBoarId>{data.displayName ?? data.userid}</StAllBoarId>
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
        </StTimeBox>
      </StAllBoardNameBox>
      <Link to={`/boards/${data?.id}`}>
        <StAllBoardContentBox>
          <StAllBoardTitleBox>
            <StAllBoarTitle>{data.title}</StAllBoarTitle>
            {/* <StAllBoardContent>{data.content}</StAllBoardContent> */}
            <StAllBoardContent
              className="toastui-editor-contents"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></StAllBoardContent>
          </StAllBoardTitleBox>
          <StAllBoardImagePreview $src={data.img}></StAllBoardImagePreview>
        </StAllBoardContentBox>
      </Link>
    </StAllBoardItem>
  );
}
