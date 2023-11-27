import styled from 'styled-components';

export const StModalContainer = styled.div`
  position: absolute;
  width: 400%;
  z-index: 10;
  top: 110%;
  right: 25%;
  border-radius: 10px;
  border: 1px solid #e4ebf0;

  @media screen and (max-width: 1200px) {
    right: -150%;
  }
`;

export const StArrowBox = styled.div`
  background-color: #fff;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: -10px;
  bottom: 0;
  transform: rotate(45deg);
  transform-origin: 0 0;
  z-index: -1;
  border: 1px solid #e4ebf0;

  @media screen and (max-width: 1200px) {
    right: 185px;
  }
`;

export const StUserInfo = styled.div`
  height: 150px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;

  img {
    margin-top: 30px;
    align-self: flex-start;
    border: 1px solid #eee;

    width: 20%;
    height: 50%;
    border-radius: 50%;
    margin-left: 4%;
  }
`;

export const StNameEmailBox = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-left: 10px;
    display: flex;
    width: 280px;
    font-size: 26px;
    font-weight: 800;
    padding: 30px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  p {
    width: 200px;
    margin-left: 40px;
    margin-bottom: 40px;
    display: flex;
    background-color: #fff;
    height: 30%;
    align-items: center;
  }
`;

export const StMypage = styled.div`
  display: flex;
  height: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  border-bottom: 1px solid #e4ebf0;
  border-top: 1px solid #e4ebf0;
  transition: 0.1s;

  &:hover {
    color: #edebeb;
  }
`;

export const StLogout = styled.div`
  display: flex;
  height: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  color: #e8344e;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: #edebeb;
  }
`;
