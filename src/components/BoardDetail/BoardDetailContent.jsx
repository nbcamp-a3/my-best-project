import React, { useEffect, useState } from 'react';
import {
  StImg,
  StContent,
  StTitle,
  StAllContent,
  StBtn,
  StAllContentBox,
  StCategory,
  StLikeBtn,
} from './styles';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit, FaGithub } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth, db } from 'config/firebase';
import {
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { FaHeart } from 'react-icons/fa6';
import {
  StAllBoarId,
  StAllBoardNameBoxes,
  StAllboardName,
  StAvatar,
  StTimeBox,
} from 'components/AllBoard/styles';
import { categories } from 'components/AllBoard/AllBoardIndex';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import selectedCategory from 'redux/modules/selectedCategory';

export default function BoardDetailContent() {
  // const like = useSelector((store) => store.likedusers);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [like, setLike] = useState(0);
  // 좋아요 눌렀을시 색상 보여주기 위해 작성
  const [clickAble, setClickAble] = useState(true);
  // 파이어베이스에 저장된 like데이터를 담기 위해 작성
  const [likedData, setLikedData] = useState({});

  const authEmail = auth.currentUser?.email;
  const authData = auth.currentUser;
  const Ref = collection(db, 'likedusers');

  //  boardid에 대한 like 데이터를 가져옴
  const readLikedData = () => {
    // sql
    getDocs(query(Ref, where('boardid', '==', id))).then((data) => {
      if (data.docs.length > 0) {
        // like 데이터가 있다면 likeData에 likeducers id를 넣어줌
        const likeData = data.docs[0].data();
        setLikedData({ ...likeData, id: data.docs[0].id });
        // 좋아요 눌렀는지 여부
        if (likeData.user.includes(authEmail)) {
          setClickAble(false);
        } else {
          setClickAble(true);
        }
        // 화면에 좋아요 누른user의 인원수 만큼 출력
        setLike(likeData.user.length);
      }
    });
  };

  // board의 데이터와 id를 가져오고 readLikedData 함수 실행
  useEffect(() => {
    const boardRef = doc(db, 'boards', id);
    getDoc(boardRef).then((res) => {
      readLikedData();
      setData(res.data());
    });
  }, [id]);

  const handleAddLike = async () => {
    const newLikedData = {
      ...likedData,
    };
    // likedData에 id가 있다면 업데이트 없다면 else부분에서 생성후 재실행
    if (likedData.id) {
      const collectionRef = doc(db, 'likedusers', likedData.id);

      // 좋아요가 눌러져 있는 경우 -> user 배열에서 본인 이메일을 제외함
      if (newLikedData.user.includes(authEmail)) {
        newLikedData.user = newLikedData.user.filter((u) => u !== authEmail);
      } else {
        // 좋아요가 안눌러져 있는 경우 -> user 배열에 본인 이메일을 추가함
        const newUserArray = [...newLikedData.user];
        newUserArray.push(authEmail);
        newLikedData.user = newUserArray;
      }

      await updateDoc(collectionRef, newLikedData);
      // 데이터 정확성 보장을 위해 다시 실행
      await readLikedData(data);
    } else {
      const likedUserData = {
        boardid: id,
        user: [authData.email],
      };
      addDoc(Ref, likedUserData);
      // setLikedData(likedUserData);
      await readLikedData(data);
    }
  };

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
      <Link to={'/boards'}>
        <StCategory>
          {categories.map((c) => {
            return c.value === selectedCategory && c.name;
          })}
        </StCategory>
      </Link>
      <StAllContent>
        <StAllBoardNameBoxes>
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
        </StAllBoardNameBoxes>
        <StImg $src={data.img} />
        <StTitle>{data.title}</StTitle>
        {/* <StContent>{data.content}</StContent> */}
        <div
          className="toastui-editor-contents"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </StAllContent>
      <StBtn>
        {data.github && (
          <a href={data.github} target="blank">
            <FaGithub size="30" />
          </a>
        )}
        {clickAble ? (
          <StLikeBtn onClick={handleAddLike}>
            <FaHeart size="28" color="grey" />
            <p>{like}</p>
          </StLikeBtn>
        ) : (
          <StLikeBtn onClick={handleAddLike}>
            <FaHeart size="28" color="red" />
            <p>{like}</p>
          </StLikeBtn>
        )}
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
