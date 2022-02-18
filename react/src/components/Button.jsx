import React from 'react';

function Button({ text, onClick, containerBtn, icon, disabled,  }) {
  return (
    <>
      <button onClick={ onClick } className={ containerBtn } disabled={ disabled }>{ icon }{ text }</button>
    </>
  );
}

export default Button;
