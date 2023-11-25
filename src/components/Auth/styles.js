import { COLORS } from 'constants/colors';
import styled, { css } from 'styled-components';

export const StOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(20, 22, 23, 0.4);
  transform: translate(-50%, -50%);
  z-index: 22;
`;

export const StAuthContainer = styled.div`
  position: relative;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-family: 'DNFBitBitv2';
    line-height: 2rem;
  }

  span {
    display: block;
    color: #666;
    line-height: 2rem;
  }

  div {
    margin-top: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

const blind = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StSignForm = styled.form`
  margin-top: 2rem;
  width: 90%;
  div {
    margin-top: 1rem;
    label {
      ${blind}
    }

    input {
      padding: 1rem;
      width: 100%;
      border: 1px solid #000;
      border-radius: 10px;
      transition: outline 0.1s ease-in-out;

      &:focus {
        border-color: transparent;
        outline: 2px solid ${COLORS.primaryColor};
      }
    }
  }
`;

export const StSocialBox = styled.div`
  text-align: center;
  span {
  }
`;

//
export const StButton = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  border: none;
  background-color: ${(props) => (props.$github ? '#333' : '#eef3f6')};
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
  color: ${(props) => (props.$github ? 'white' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  svg {
    margin-right: 5px;
    transform: translateY(1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// & > button {
//   width: 100%;
//   padding: 1rem;
//   background-color: ${COLORS.primaryColor};
//   border-radius: 10px;
//   font-weight: bold;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.8;
//   }
// }

export const StCloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 6px;
  cursor: pointer;
`;

// EmailLoginScreen
export const StGoToBackBtn = styled.button`
  position: absolute;
  top: 45px;
  left: 50px;
  padding: 6px;
  font-weight: bold;
  cursor: pointer;

  svg {
    margin-right: 5px;
    transform: translateY(2px);
  }
`;

export const StGoToSignUpBtn = styled.button`
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  color: #666;
  cursor: pointer;
`;

export const StError = styled.div`
  font-weight: bold;
  color: #e01e5a;
`;
