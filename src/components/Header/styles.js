import styled from 'styled-components';

export const Stcontainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  /* background-color: red; */
  align-items: center;
  /* border-bottom: 1px solid #bebebe;
  box-shadow: 0px 1px 10px black; */
  padding-top: 30px;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    height: 500px;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
  }
`;

export const StLoginBtn = styled.button`
  display: flex;
  height: 80px;
  width: 10%;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 800;

  &:hover {
    color: #e8344e;
  }
`;

export const StLogo = styled.img`
  width: 20rem;
  height: auto;
  display: flex;
  /* padding-left: 1px; */
  /* background-color: rebeccapurple; */
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    height: 10rem;
    flex-direction: column;
  }
`;

export const StNav = styled.div`
  /* background-color: #bebebe; */
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    padding: 40px;
    font-size: 20px;
    font-weight: 800;
  }

  @media screen and (max-width: 1200px) {
    height: 300px;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
    border-bottom: 1px solid black;
  }
`;

export const StPtag = styled.p`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;
