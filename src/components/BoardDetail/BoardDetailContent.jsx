import React, { useEffect, useState } from 'react';

import {
  StImg,
  StContent,
  StTitle,
  StAllContent,
  StBtn,
  StAllContentBox,
} from './styles';
import { MdDeleteForever } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from 'config/firebase';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

export default function BoardDetailContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const boardRef = doc(db, 'boards', id);
    getDoc(boardRef).then((res) => {
      setData(res.data());
    });
  }, [id]);

  const clickDelete = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    const boardRef = doc(db, 'boards', id);
    deleteDoc(boardRef).then(() => {
      alert('삭제되었습니다.');
      navigate('/boards');
    });
  };

  if (!data) return null;
  return (
    <StAllContentBox key={data.uid}>
      <StAllContent>
        <StImg $src={data.img} />
        <StTitle>{data.title}</StTitle>
        <StContent>{data.content}</StContent>
      </StAllContent>
      <StBtn>
        <FaGithub size="30" />
        <MdDeleteForever size="30" onClick={() => clickDelete()} />
      </StBtn>
    </StAllContentBox>
  );
}
