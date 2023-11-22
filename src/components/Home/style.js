import styled from 'styled-components';

export const StHomeContainer = styled.div`
  position: relative;
  width: 100%;
  /* background-color: rebeccapurple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
`;

export const StGoToListBtn = styled.button`
  position: absolute;
  width: 100px;
  height: 50px;
  right: 60px;
  top: 660px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 800;
  /* border-bottom: 4px solid black; */
  opacity: 0.3;
  text-decoration: underline;

  &:hover {
    /* background-color: grey; */
    opacity: 1;
    text-decoration: underline;
    color: red;
  }
`;
export const StMainContent = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f9f9f9;
  margin-bottom: 200px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 30px;

  & > div {
    display: flex;
  }

  img {
    width: 500px;
    height: 400px;
    border-radius: 20px;
  }

  h2 {
    font-size: 40px;
    margin: 30px;
  }

  p {
    margin-top: 30px;
    margin-left: 30px;
  }
`;

export const StContentContainer = styled.div`
  display: grid;
  /* background-color: red; */
  grid-template-columns: repeat(2, 900px);
`;

export const StContentBox = styled.div`
  width: 800px;
  height: 600px;
  /* background-color: black; */
  gap: 30px;
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

  img {
    width: 776px;
    height: 400px;
    border-radius: 20px;
    padding: 30px;
  }

  h2 {
    font-size: 50px;
    color: #333;
    margin: 30px;
  }

  p {
    color: #333;
    margin: 30px;
  }
`;

export const StPtag = styled.p`
  font-size: 50px;
  font-weight: 800;
  position: absolute;
  left: 60px;
  top: 550px;
  display: flex;
  height: 100px;
  align-items: center;
`;
