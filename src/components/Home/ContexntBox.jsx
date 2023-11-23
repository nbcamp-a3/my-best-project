import React from 'react';
import { StContentBox } from './style';
import { Link } from 'react-router-dom';

export default function ContexntBox({ img, title, content, uid }) {
  return (
    <Link to="/boards/:id">
      <StContentBox key={uid}>
        <img src={img} alt="이미지" />
        <h2>{title}</h2>
        <p>{content}</p>
      </StContentBox>
    </Link>
  );
}
