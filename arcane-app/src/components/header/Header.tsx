import { memo } from 'react';
import { Link } from 'react-router';
import './style.css';

function Header() {

  return (
    <div className={'Header'}>
      <Link to={'/'} className={'Header-title'}>Kino</Link>
      <div className={'Header-btns'}>
        <Link to={'/signup'}>
          Регистрация
        </Link>
        <Link to={'/signin'}>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default memo(Header);
