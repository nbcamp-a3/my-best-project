import React, { useEffect, useMemo, useState } from 'react';
import { StAuthContainer, StCloseBtn, StOverlay } from './styles';
import { IoMdClose } from 'react-icons/io';
import AuthStartScreen from './AuthStartScreen';
import EmailLoginScreen from './EmailLoginScreen';
import SignUpScreen from './SignUpScreen';

export default function AuthModal({ onClose }) {
  const [currentComponent, setCurrentComponent] = useState('start');
  const toggleCurrentComponent = (componentName) =>
    setCurrentComponent(componentName);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const renderComponent = useMemo(() => {
    switch (currentComponent) {
      case 'start':
        return <AuthStartScreen toggleComponent={toggleCurrentComponent} />;
      case 'email':
        return <EmailLoginScreen toggleComponent={toggleCurrentComponent} />;
      case 'signup':
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
