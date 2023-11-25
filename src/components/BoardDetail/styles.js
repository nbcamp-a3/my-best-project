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
  justify-content: flex-end;
  margin-top: 40px;
  cursor: pointer;
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
