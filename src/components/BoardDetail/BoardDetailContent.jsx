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
import { FaEdit, FaGithub } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth, db } from 'config/firebase';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import {
  StAllBoarId,
  StAllBoardNameBoxes,
  StAllboardName,
  StAvatar,
  StTimeBox,
} from 'components/AllBoard/styles';

export default function BoardDetailContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const authEmail = auth.currentUser?.email;
  useEffect(() => {
    const boardRef = doc(db, 'boards', id);
    getDoc(boardRef).then((res) => {
      setData(res.data());
    });
  }, [id]);

  const clickDelete = async () => {
    // if (!authEmail) return alert('로그인 후 이용해주세요.');
    // if (data.userid !== authEmail) return alert('작성자만 삭제할 수 있습니다.');
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
        <StAllBoardNameBoxes>
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
          </StTimeBox>
        </StAllBoardNameBoxes>
        <StImg $src={data.img} />
        <StTitle>{data.title}</StTitle>
        <StContent>{data.content}</StContent>
      </StAllContent>
      <StBtn>
        <FaGithub size="30" />
        {authEmail === data.userid && (
          <>
            <Link to={`/boards/${id}/edit`}>
              <FaEdit size="28" />
            </Link>
            <MdDeleteForever size="30" onClick={() => clickDelete()} />
          </>
        )}
      </StBtn>
    </StAllContentBox>
  );
}
