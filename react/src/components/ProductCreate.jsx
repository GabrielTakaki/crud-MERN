import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../api';
import { PRODUCT_STATE } from '../helpers';
import ProductForm from '../components/ProductForm';

function ProductCreate() {
  const [{
    product,
    amount,
    price,
    paid,
    beginning,
    installments,
  }, setState] = useState(PRODUCT_STATE);

  const createProduct = async () => {
    try {
      const req = await axios.post(`${URL}/product`, {
        product,
        amount: amount || '-',
        price,
        paid: paid || 'N/A',
        beginning: beginning || '-',
        installments: installments || 'N/A',
      }, { withCredentials: true });
      if (req) {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isValid = () => {
    if (product && price) return false;
    return true;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ProductForm
        onChange={ onChange }
        disabled={ isValid() }
        valueProduct={ product }
        valueAmount={ amount }
        valuePrice={ price }
        valuePaid={ paid }
        valueBeginning={ beginning }
        valueInstallments={ installments }
        onClick={ () => createProduct() }
      />
    </>
  );
}

export default ProductCreate;
