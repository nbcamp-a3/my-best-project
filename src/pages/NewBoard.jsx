import React from 'react';
import {
  StBtnContainer,
  StContainer,
  StBtn,
  StRedBtn,
} from 'components/NewBoard/styles';
import { FaCode } from 'react-icons/fa';

export default function NewBoard() {
  return (
    <>
      <form>
        <StContainer>
          <input type="text" placeholder="제목을 입력하세요." />
          <div>
            <FaCode size={20} />
          </div>
          <textarea rows={50} placeholder="내용을 입력하세요."></textarea>
        </StContainer>
        <StBtnContainer>
          <StBtn>취소</StBtn>
          <StRedBtn>글쓰기</StRedBtn>
        </StBtnContainer>
      </form>
    </>
  );
}
