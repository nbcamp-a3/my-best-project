import React from 'react';
import { StMainContent } from './style';
import { fakedata } from '../../mock/boards';

export default function MainContent() {
  const randomNum1 = Math.floor(Math.random() * fakedata.length).toString();
  const filtered = fakedata.filter((item) => {
    return randomNum1 === item.uid;
  });
  return (
    <StMainContent>
      {filtered.map((item) => {
        return (
          <div key={item.uid}>
            <div>
              <img src={item.img} alt="이미지" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </StMainContent>
  );
}
