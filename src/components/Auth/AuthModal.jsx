import React, { useEffect, useMemo, useState } from 'react';
import { StAuthContainer, StCloseBtn, StOverlay } from './styles';
import { IoMdClose } from 'react-icons/io';
import AuthStartScreen from './AuthStartScreen';
import EmailLoginScreen from './EmailLoginScreen';
import SignUpScreen from './SignUpScreen';

const componentList = {
  START: 'start',
  EMAIL: 'email',
  SIGNUP: 'signup',
};

export default function AuthModal({ onClose }) {
  const [currentComponent, setCurrentComponent] = useState(componentList.START);
  const toggleCurrentComponent = (componentName) =>
    setCurrentComponent(componentName);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const renderComponent = useMemo(() => {
    switch (currentComponent) {
      case componentList.START:
        return <AuthStartScreen toggleComponent={toggleCurrentComponent} />;
      case componentList.EMAIL:
        return <EmailLoginScreen toggleComponent={toggleCurrentComponent} />;
      case componentList.SIGNUP:
        return <SignUpScreen toggleComponent={toggleCurrentComponent} />;
      default:
        return;
    }
  }, [currentComponent]);

  return (
    <StOverlay>
      <StAuthContainer>
        {renderComponent}
        <StCloseBtn onClick={onClose}>
          <IoMdClose size="1.6rem" />
        </StCloseBtn>
      </StAuthContainer>
    </StOverlay>
  );
}
