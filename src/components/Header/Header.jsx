import { login } from 'config/firebase';
import React from 'react';

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
