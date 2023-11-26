import styled from 'styled-components';
import { COLORS } from 'constants/colors';

// 이름 앞 St 붙이기
export const StBoardDetailMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StAllContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100px;
  border-radius: 20px;
  background-color: ${COLORS.itembgColor};
  margin-top: 50px;
`;

export const StImg = styled.div`
  background-image: url(${(props) => props.$src});
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1300px) {
    width: 400px;
  }
  @media only screen and (max-width: 1050px) {
    width: 280px;
  }
`;

export const StAllContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  justify-content: center;
  padding: 20px;
`;

export const StAllContent = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 20px;
  background-color: ${COLORS.itembgColor};
`;

export const StContent = styled.p`
  width: 100%;
  text-align: justify;
  padding: 15px;
  font-size: 18px;
  word-break: break-all;
`;

export const StTitle = styled.p`
  padding: 15px;
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0 30px 0;
`;

export const StBtn = styled.button`
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const StGoListBtn = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 7px;
  font-size: medium;
  background-color: ${COLORS.itembgColor};
  cursor: pointer;
`;

export const StGoListBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 65%;
`;

export const StCategory = styled.h2`
  margin: 20px;
  letter-spacing: 2px;
  font-size: xx-large;
  font-family: 'DNFBitBitv2';
`;

export const StCommentsContainer = styled.div`
  border-radius: 15px;
  width: 50%;
  padding: 20px;
  margin: 20px 0px;

  li {
    background-color: ${COLORS.itembgColor};
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
  }

  form {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-items: end;
    grid-template-areas: '. input input input btn';
    grid-template-columns: max-content;
  }

  input {
    background-color: ${COLORS.itembgColor};
    border-radius: 10px;
    font-weight: 600;
    font-size: large;
    width: 90%;
    padding: 20px;
    grid-area: input;
  }
`;

export const StCommentBtn = styled.button`
  background-color: ${COLORS.primaryColor};
  padding: ${(props) => props.$padding};
  margin-left: 10px;
  border-radius: 10px;
  grid-area: btn;
  font-size: medium;
  letter-spacing: 1px;
  transition: all 0.4s;
  color: white;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const StUserName = styled.p`
  font-weight: 600;
  font-size: large;
`;

export const StCommentDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px 15px 0px;

  p {
    font-size: medium;
  }
`;

export const StComment = styled.p`
  font-size: xx-large;
  font-family: 'DNFBitBitv2';
  letter-spacing: 2px;

  margin-bottom: 20px;
`;

export const StDelEditBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
