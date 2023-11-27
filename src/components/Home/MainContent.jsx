import React, { useEffect } from 'react';
import {
  StEditContentBox,
  StMainContent,
  StMainImageBox,
  StMainInfoBox,
} from './style';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function MainContent() {
  const navigate = useNavigate();
  const [randomData, setRandomData] = useState([]);
  const boards = useSelector((store) => store.boards);

  useEffect(() => {
    const randomNum1 = Math.floor(Math.random() * boards.length);
    const filtered = boards.filter((item, index) => {
      return randomNum1 === index;
    });
    setRandomData(filtered);
  }, [boards]);

  return (
    <>
      {randomData.map((item) => {
        return (
          <StMainContent
            key={item.id}
            onClick={() => {
              navigate(`/boards/${item.id}`);
            }}
          >
            <StMainImageBox>
              <img src={item.img} alt="이미지" />
            </StMainImageBox>
            <StMainInfoBox>
              <h2>{item.title}</h2>
              <StEditContentBox
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></StEditContentBox>
            </StMainInfoBox>
          </StMainContent>
        );
      })}
    </>
  );
}
