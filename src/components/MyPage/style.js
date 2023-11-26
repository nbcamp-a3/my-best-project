import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const StMyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  color: black;
  align-items: center;
`;

export const StMyPageProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  align-items: center;

  div {
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    border-radius: 20px;
    background-color: ${COLORS.primaryColor};
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StMyPageProfileMain = styled.div`
  background-color: ${COLORS.itembgColor};
  color: black;
  padding: 20px;
  margin-top: 40px;
  width: 900px;
  border-radius: 30px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const StMyAvatar = styled.div`
  background-image: url(${(props) => props.$src});
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const StMyPageProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 30px;
    font-size: 15px;
    font-weight: bold;
  }

  p {
    display: inline-block;
    font-size: 25px;
    color: ${COLORS.primaryColor};
  }
`;

export const StMyPageNameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    margin-top: 35px;
  }
`;

export const StMyPageProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const StMyPageGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
  justify-items: center;
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 20px 0;
  }
`;

export const StMyPageProjectImg = styled.div`
  background-image: url(${(props) => props.$src});
  background-color: aliceblue;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  cursor: pointer;
`;

export const StMyPageProfileNameBox = styled.div`
  input {
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid ${COLORS.primaryColor};
    margin-left: 10px;
    width: 200px;
    text-align: center;
    outline: none;
  }
`;
