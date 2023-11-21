import React from 'react';
import { login } from 'config/firebase';

export default function Header() {
  const handleLogin = () => {
    login();
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
