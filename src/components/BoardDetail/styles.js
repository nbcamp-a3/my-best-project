import styled from 'styled-components';
import { COLORS } from 'constants/colors';

// 이름 앞 St 붙이기
export const StBoardDetailMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StImg = styled.img`
  width: 100%;
  height: 450px;

  border-radius: 20px;
`;

export const StAllContent = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 4%;

  border-radius: 20px;

  background-color: ${COLORS.itembgColor};
`;

export const StContent = styled.p`
  width: 100%;
  text-align: justify;
  padding: 2%;
`;

export const StTitle = styled.p`
  padding: 2%;
  font-size: larger;
`;

export const StBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3%;
`;

export const StGoListBtn = styled.button`
  width: 100%;
  margin-top: 3%;
  padding: 1%;
  border-radius: 7px;
  font-size: medium;
  background-color: ${COLORS.itembgColor};
`;
