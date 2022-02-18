import React from 'react';

function Label({ text, type, name, onChange, value, placeholder, labelClass, labelInput, disabled, maxLength , min, pattern}) {
  return (
    <label className={ labelClass }>
      { text }
      <input disabled={ disabled } className={ labelInput } type={ type } onChange={ onChange } value={ value } name={ name } placeholder={ placeholder } maxLength={ maxLength } min={ min } pattern={ pattern } />
    </label>
  );
}

export default Label;
