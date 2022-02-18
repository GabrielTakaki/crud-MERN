import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../api';
import Context from '../context/Context';
import ContractForm from './ContractForm';
import { INITIAL_STATE } from '../helpers';

function ContractUpdate() {
  const [{
    due,
    zip,
    city,
    email,
    state,
    phone,
    country,
    company,
    address,
    district,
    contractEnd,
    socialReason,
    contractStart,
    documentNumber,
  }, setState] = useState(INITIAL_STATE);
  const { updateId, setModal } = useContext(Context);

  const clearInput = () => {
    setState({ ...INITIAL_STATE });
  };

  const updateContract = async (id) => {
    try {
      const req = await axios.put(`${URL}/contract/${id}`, {
        due,
        zip,
        city,
        email,
        state,
        phone,
        country,
        company,
        address,
        district,
        contractEnd,
        socialReason,
        contractStart,
        documentNumber,
      }, { withCredentials: true });
      if (req) {
        window.location.reload(false);
      }
      setModal(false);
      clearInput();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContractById = async (id) => {
      try {
        const req = await axios.get(`${URL}/contract/${id}`, { withCredentials: true });
        setState(req.data);
      } catch (error) {
        console.log(error);
      }
    }
    getContractById(updateId);
  }, [updateId]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const isValid = () => {
    if (documentNumber &&
      socialReason &&
      address &&
      district &&
      zip &&
      email &&
      contractStart &&
      company) return false;
    return true;
  };

  return (
    <>
    <ContractForm
      onChange={ onChange }
      valueDue={ due }
      valueZip={ zip }
      valueCity={ city }
      valueEmail={ email }
      valueState={ state }
      valuePhone={ phone }
      valueCountry={ country }
      valueCompany={ company }
      valueAddress={ address }
      valueDistrict={ district }
      valueEnd={ contractEnd }
      valueSocial={ socialReason }
      valueStart={ contractStart }
      valueDocument={ documentNumber }
      disabled={ isValid() }
      onClick={ () => updateContract(updateId) }
    />
    </>
  );
}

export default ContractUpdate;
