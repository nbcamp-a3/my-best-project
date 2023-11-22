import React from 'react';
import { StContentContainer } from './style';
import ContexntBox from './ContexntBox';
import { fakedata } from '../../mock/boards';

export default function ContentContainer() {
  return (
    <StContentContainer>
      {fakedata.map((item) => {
        return (
          <ContexntBox
            key={item.uid}
            uid={item.uid}
            title={item.title}
            content={item.content}
            img={item.img}
          />
        );
      })}
    </StContentContainer>
  );
}
