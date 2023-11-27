import styled from 'styled-components';

export const StHomeContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: 100%;
  margin-bottom: 200px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  /* position: relative;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 30px; */
  padding: 2rem;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s;
  margin-bottom: 3rem;
  &:hover {
    background-color: #edebeb;
  }

  & > div {
    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    h2 {
      font-size: 40px;
      margin: 30px 0;
      font-weight: 800;
    }
  }

  /* div > img {
    width: 400px;
    height: 400px;
    border-radius: 20px;
  } */

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const StMainImageBox = styled.div`
  width: 40%;
  text-align: center;

  img {
    width: 350px;
    height: 350px;
    border-radius: 20px;
  }
`;

export const StMainInfoBox = styled.div`
  width: 60%;
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
  height: 800px;
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
  height: 100%;
  /* -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; */

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

  & > div {
    color: #333;
    margin: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
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

export const StEditContentBox = styled.div`
  /* word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  h2 {
    font-size: 1rem !important;
    margin: 0 !important;
  }
`;

export const StHomeTitle = styled.h2`
  font-size: xx-large;
  font-weight: bold;
`;

export const StHomeContent = styled.div`
  font-size: large;
  text-align: justify;
`;
