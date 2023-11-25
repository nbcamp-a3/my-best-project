import styled from 'styled-components';

export const StHomeContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
`;

export const StCommentBtnBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const StGoToListBtn = styled.button`
  width: 20%;
  height: inherit;
  cursor: pointer;
  font-size: 25px;
  font-weight: 800;
  opacity: 0.3;
  text-decoration: underline;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:hover {
    opacity: 1;
    text-decoration: underline;
    color: red;
  }
`;
export const StMainContent = styled.div`
  position: relative;
  width: 100%;
  height: 150%;
  background-color: #f9f9f9;
  margin-bottom: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 30px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #edebeb;
  }

  & > div {
    display: flex;

    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    width: 600px;
    height: 600px;
    border-radius: 20px;
  }

  h2 {
    font-size: 40px;
    margin: 30px;
    font-weight: 800;
  }

  p {
    margin-top: 100px;
    margin-left: 30px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 30px;
  place-items: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const StContentBox = styled.div`
  width: 600px;
  height: 80%;
  justify-self: center;
  align-self: center;
  border-radius: 20px;
  margin: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: 0.4s;
  display: flex;

  &:hover {
    background-color: #edebeb;
  }

  img {
    width: 550px;
    height: 500px;
    border-radius: 20px;
    padding: 30px;
  }

  h2 {
    font-size: 40px;
    color: #333;
    margin: 30px;
    font-weight: 800;
  }

  p {
    color: #333;
    margin: 30px;
  }

  @media screen and (max-width: 1200px) {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StPtag = styled.p`
  font-size: 50px;
  font-weight: 800;
  display: flex;
  height: 100px;
  align-items: center;
`;
