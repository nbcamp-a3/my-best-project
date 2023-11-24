import styled from 'styled-components';

export const Stcontainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  padding-top: 30px;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    height: 500px;
    flex-direction: column;
    align-items: center;
  }
`;
export const StLogoBox = styled.div`
  display: flex;
  position: relative;
`;
export const StLoginBtn = styled.button`
  width: 100px;
  display: flex;
  height: 80px;
  /* width: 10%; */
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
  /* width: 20rem; */
  height: 80px;
  display: flex;

  cursor: pointer;
  @media screen and (max-width: 1200px) {
    height: 80px;
    flex-direction: column;
  }
`;

export const StNav = styled.div`
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
    align-items: center;
    border-bottom: 1px solid black;
  }
`;

export const StPtag = styled.p`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;
