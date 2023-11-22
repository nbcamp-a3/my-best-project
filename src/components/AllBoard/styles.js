import styled from 'styled-components';

export const StAllboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: black;
  justify-content: center;
  align-items: flex-start;
`;
export const StAllboardIndexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 40px 20px 0 100px;
  position: sticky;
  top: 30px;
`;

export const StAllboardIndexes = styled.div`
  border: 2px solid #e8344e;
  border-radius: 10px;
  width: 200px;
  padding: 40px 0 0 0;
  background-color: #e8344e;
  color: white;
`;

export const StAllBoardList = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  display: grid;
  grid-template: repeat(1, 1fr);
  gap: 10px;
`;

export const StAllBoardItem = styled.div`
  background-color: #f9f9f9;
  margin-bottom: 40px;
  margin-left: 50px;
  padding: 20px;
  width: 900px;
  border-radius: 30px;
  /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */
`;

export const StAllBoardNameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
`;

export const StAllboardName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  font-size: 20px;
  align-items: center;
`;

export const StAvatar = styled.div`
  background-image: url(${(props) => props.$src});
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

export const StAllboardIndex = styled.div`
  margin: 20px 0 50px 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const StAllBoardLikedButton = styled.button`
  border: none;
  background-color: #f9f9f9;
  font-size: 20px;
  cursor: pointer;
`;

export const StAllBoarId = styled.div`
  margin-left: 20px;
`;

export const StAllBoardContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
`;

export const StAllBoarTitle = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
`;

export const StAllBoardContent = styled.div`
  font-size: 20px;
  margin-right: 15px;
  margin-left: 10px;
  width: 560px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const StAllBoardTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`;

export const StAllBoardImagePreview = styled.div`
  background-image: url(${(props) => props.$src});
  width: 230px;
  height: 230px;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

export const StWriteButton = styled.button`
  border: none;
  background-color: #e8344e;
  color: white;
  font-size: 15px;
  cursor: pointer;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 50px;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
  width: 100px;
  font-weight: bold;
`;

export const StTimeBox = styled.div``;
