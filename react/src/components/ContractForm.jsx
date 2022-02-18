import React, { useEffect } from 'react';
import Label from './Label';
import Button from './Button';
import { getCountries } from '../redux/ducks/api';
import { useSelector, useDispatch } from 'react-redux';

function ContractForm({
  onChange,
  onClick,
  disabled,
  valueCountry,
  valueState,
  valueCity,
  valueDocument,
  valueCompany,
  valueAddress,
  valueDistrict,
  valueEmail,
  valuePhone,
  valueZip,
  valueSocial,
  valueStart,
  valueEnd,
  valueDue,
}) {
  const [disableState, setDisableState] = React.useState(true);
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.itemsReducer);
  const days = [];
  for (let i = 0; i <= 31; i++) {
    days.push(i);
  };
  useEffect(() => {dispatch(getCountries())}, [dispatch]);
  const allowOnceCountrySelected = () => {
    setDisableState(false);
  }
  return (
    <div className="update">
      <section className="update__form">
        <label className="main__label">
          Country
          {
            <select onClick={ allowOnceCountrySelected } name="country" value={ valueCountry } onChange={ onChange } className="main__input">
              <option>Select a country...</option>
              {
                countries.map((country) => (
                  <option className="main__option" key={ country.name.common }>{ country.name.common }</option>
                ))
              }
            </select>
          }
        </label>
        <Label
          text="State"
          type="text"
          name="state"
          value={ valueState }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
          disabled={ disableState }
        />
        <Label
          text="City"
          type="text"
          name="city"
          value={ valueCity }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <Label
          text="Document number"
          type="number"
          name="documentNumber"
          value={ valueDocument }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
          min="0"
        />
        <Label
          text="Social reason"
          type="text"
          name="socialReason"
          value={ valueSocial }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <Label
          text="Address"
          type="text"
          name="address"
          value={ valueAddress }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <Label
          text="District"
          type="text"
          name="district"
          value={ valueDistrict }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <Label
          text="ZIP"
          type="number"
          name="zip"
          value={ valueZip }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
          maxLength="8"
          min="0"
        />
        <Label
          text="Email"
          type="text"
          name="email"
          value={ valueEmail }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <Label
          text="Phone"
          type="tel"
          name="phone"
          value={ valuePhone }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
          maxLength="19"
        />
        <Label
          text="Beginning of contract"
          type="date"
          name="contractStart"
          value={ valueStart }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
          placeholder="DD/MM/YYYY"
          maxLength="10"
        />
        <Label
          text="End of contract"
          type="date"
          name="contractEnd"
          value={ valueEnd }
          onChange={ onChange }
          placeholder="DD/MM/YYYY"
          labelClass="main__label"
          labelInput="main__input"
          maxLength="10"
        />
        <Label
          text="Company"
          type="text"
          name="company"
          value={ valueCompany }
          onChange={ onChange }
          labelClass="main__label"
          labelInput="main__input"
        />
        <label className="main__label">
          Due Day
          {
            <select name="due" value={ valueDue } onChange={ onChange } className="main__input">
              {
                days.map((day) => (
                  <option className="main__option" key={ day }>{ day }</option>
                ))
              }
            </select>
          }
        </label>
      </section>
      <Button
        text="Save"
        disabled={ disabled }
        onClick={ onClick }
        type="buttom"
        containerBtn="update__button"
      />
    </div>
  );
}

export default ContractForm;
