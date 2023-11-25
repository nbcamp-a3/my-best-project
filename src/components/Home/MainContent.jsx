import React, { useEffect } from 'react';
import { StMainContent } from './style';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function MainContent() {

  const navigate = useNavigate()
  const [randomData, setRandomData] = useState([]);
  const boards = useSelector((store) => store.boards);

  useEffect(() => {
    const randomNum1 = Math.floor(Math.random() * boards.length);

    const filtered = boards.filter((item, index) => {
      return randomNum1 === index;
    });
    setRandomData(filtered);
    console.log('filtered:', filtered);
  }, [boards]);

  return (
<>
      {randomData.map((item) => {
        return (
          <StMainContent key={item.id} onClick={()=>{
            navigate(`/boards/${item.id}`)
          }}>
          <div>
            <div>
              <img src={item.img} alt="이미지" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
          </StMainContent>
        );
      })}
</>
  );
}
