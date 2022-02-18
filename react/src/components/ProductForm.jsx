import React from 'react';
import Label from './Label';
import Button from './Button';

function ProductForm({
  onChange,
  onClick,
  disabled,
  valueProduct,
  valueAmount,
  valuePrice,
  valuePaid,
  valueBeginning,
  valueInstallments,
}) {

  return (
    <div className="form">
      <section className="form__section">
        <Label
          text="Product"
          type="text"
          name="product"
          value={ valueProduct }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
          />
        <Label
          text="Amount"
          type="number"
          name="amount"
          value={ valueAmount }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
          min="0"
        />
        <Label
          text="Final Unit Price(R$)"
          type="number"
          name="price"
          value={ valuePrice }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
          min="0"
        />
        <Label
          text="Installments"
          type="number"
          name="installments"
          value={ valueInstallments }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
          min="0"
        />
        <Label
          text="Paid"
          type="number"
          name="paid"
          value={ valuePaid }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
          min="0"
        />
        <Label
          text="Beginning of Term"
          type="date"
          name="beginning"
          placeholder="DD/MM/YYYY"
          value={ valueBeginning }
          onChange={ onChange }
          labelClass="form__label"
          labelInput="form__input"
        />
      </section>
      <Button
        text="Save"
        disabled={ disabled }
        onClick={ onClick }
        containerBtn="update__button"
      />
    </div>
  );
}

export default ProductForm;
