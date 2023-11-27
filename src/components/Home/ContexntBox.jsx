import React from 'react';
import { StContentBox } from './style';
import { Link } from 'react-router-dom';

export default function ContexntBox({ data }) {
  return (
    <Link to={`/boards/${data.id}`}>
      <StContentBox key={data.id}>
        <div>
          <img src={data.img} alt="이미지" />
          <h2>{data.title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </StContentBox>
    </Link>
  );
}
