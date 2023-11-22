import styled from 'styled-components';

export const Stcontainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 80px;
  /* background-color: red; */
  align-items: center;
  /* border-bottom: 1px solid #bebebe;
  box-shadow: 0px 1px 10px black; */
  justify-content: center;
`;

export const StLoginBtn = styled.button`
  position: absolute;
  display: flex;
  height: 100px;
  width: 80px;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
  right: 0;
  cursor: pointer;
`;

export const StLogo = styled.img`
  position: absolute;
  width: 220px;
  height: 80px;
  display: flex;
  left: 40px;
`;

export const StNav = styled.div`
  /* background-color: #bebebe; */
  width: 1000px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StPtag = styled.p`
  font-size: 20px;
  font-weight: 800;
`;
