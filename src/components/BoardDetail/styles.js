import styled from 'styled-components';
import { COLORS } from 'constants/colors';

// 이름 앞 St 붙이기
export const StBoardDetailMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StImg = styled.img`
  min-width: 550px;
  height: 350px;

  border-radius: 20px;
`;

export const StAllContent = styled.div`
  height: 700px;
  min-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: 20px;

  background-color: ${COLORS.itembgColor};
`;

export const StContent = styled.p`
  width: 580px;
  text-align: justify;
`;

export const StTitle = styled.p`
  font-size: larger;
`;

export const StBtn = styled.button`
  min-width: 700px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const StGoListBtn = styled.button`
  min-width: 700px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 7px;
  background-color: ${COLORS.itembgColor};
`;
