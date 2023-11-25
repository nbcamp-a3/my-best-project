import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const StTextarea = styled.textarea`
  font-size: medium;
  width: 100%;
  resize: none;
  background-color: ${COLORS.itembgColor};
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const StTitle = styled.input`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${COLORS.itembgColor};
`;
export const StIconsDiv = styled.div`
  margin-top: 20px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: ${COLORS.itembgColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid gray;

  p {
    margin-right: 5px;
  }

  select {
    margin-right: 15px;
  }
`;
export const StImageFile = styled.input`
  width: 20%;
  font-size: small;
  border-radius: 0;
`;
export const StBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StBtn = styled.button`
  margin: 20px 70px 0px 0px;
  padding: 15px;
  width: 10%;
  background-color: gray;
  border-radius: 10px;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: white;
  }
`;
export const StRedBtn = styled.button`
  margin: 20px 0px 0px 70px;
  padding: 15px;
  width: 10%;
  background-color: ${COLORS.primaryColor};
  border-radius: 10px;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: white;
  }
`;
export const StDiv = styled.div`
  max-width: 1200px;
  margin: 0px auto;

  h2 {
    font-size: 2rem;
    text-align: center;
    max-width: 1200px;
    margin: 30px 0px 20px 0px;

    font-family: 'DNFBitBitv2';
  }
`;
export const StGitHub = styled.span`
  font-weight: 600;
  width: 40%;
  input {
    width: 70%;
    border-bottom: 1px solid black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const StDownloadImg = styled.div`
  margin-top: 15px;

  img {
    margin-top: 8px;
    width: 150px;
  }
`;
