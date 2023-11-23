import React from 'react';
import styled from 'styled-components';

export default function LoadingScreen() {
  return (
    <StWrapper>
      <h2>Loading...</h2>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'DNFBitBitv2';
  }
`;
