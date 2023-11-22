import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const StTextarea = styled.textarea`
  background-color: yellow;
`;

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 2rem;
    min-width: 1000px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${COLORS.itembgColor};
  }

  textarea {
    font-size: large;
    min-width: 1000px;
    resize: none;
    background-color: ${COLORS.itembgColor};
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  div {
    margin-top: 20px;
    width: 1000px;

    display: flex;
    justify-content: flex-start;
    padding: 10px;
    background-color: ${COLORS.itembgColor};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid gray;
  }
`;

export const StBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StBtn = styled.button`
  margin: 20px 20px 0px 20px;
  padding: 15px;
  width: 100px;
  background-color: gray;
  border-radius: 10px;
  font-size: medium;
  transition: all 0.4s;

  &:hover {
    color: white;
  }
`;
export const StRedBtn = styled.button`
  margin: 20px 20px 0px 20px;
  padding: 15px;
  width: 100px;
  background-color: ${COLORS.primaryColor};
  border-radius: 10px;
  font-size: medium;
  transition: all 0.4s;

  &:hover {
    color: white;
  }
`;
