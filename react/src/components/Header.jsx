import React from 'react';

function Header({ title, icon, text, user, onClick, buttonClass }) {
  return (
    <header className="header">
      <h1 className="header__title">{ title }</h1>
      <h4>{ user }</h4>
        <button onClick={ onClick } className={ buttonClass }>
          { icon }
          <span className="header__span">{ text }</span>
        </button>
    </header>
  );
}

export default Header;
