import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, user, signOut } = useAuth();

  return (
    <header>
      <Link to="/">Логотип</Link>
      {isAuthenticated ? (
        <>
          <span>{user}</span>
          <Link to="/favorites">Избранное</Link>
          <Link to="/history">История</Link>
          <button onClick={signOut}>Выход</button>
        </>
      ) : (
        <>
          <Link to="/signin">Вход</Link>
          <Link to="/signup">Регистрация</Link>
        </>
      )}
    </header>
  );
};

export default Header;