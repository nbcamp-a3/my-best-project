import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { StBtn } from './styles';

export default function BoardDetailBtn() {
  return (
    <div>
      <StBtn>
        <FaGithub size="30" />
        <MdDeleteForever size="30" />
      </StBtn>
    </div>
  );
}
