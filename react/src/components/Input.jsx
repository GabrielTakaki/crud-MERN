import React from 'react';

function Input({ type, onChange, value, name, placeholder, icons, container, containerIcons, containerInput }) {
  return (
    <div className={ container }>
      <div className={ containerIcons }>
        { icons }
      </div>
      <input
        className={ containerInput }
        type={ type }
        onChange={ onChange }
        value={ value }
        name={ name }
        placeholder={ placeholder }
      />
    </div>
  );
}

export default Input;
