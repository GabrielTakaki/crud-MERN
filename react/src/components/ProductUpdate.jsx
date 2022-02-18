import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../api';
import ProductForm from './ProductForm';
import Context from '../context/Context';
import { PRODUCT_STATE } from '../helpers';

function ProductUpdate() {
  const [{
    product,
    amount,
    price,
    paid,
    beginning,
    installments,
  }, setState] = useState(PRODUCT_STATE);
  const { updateIdProduct, setProductModal } = useContext(Context);

  const updateProduct = async (id) => {
    try {
      const req = await axios.put(`${URL}/product/${id}`, {
        product,
        amount,
        price,
        paid,
        beginning,
        installments,
      }, { withCredentials: true });
      if (req) {
        window.location.reload(false);
      }
      setProductModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContractById = async (id) => {
      try {
        const req = await axios.get(`${URL}/product/${id}`, { withCredentials: true });
        setState(req.data);
      } catch (error) {
        console.log(error);
      }
    }
    getContractById(updateIdProduct);
  }, [updateIdProduct]);

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
        onClick={ () => updateProduct(updateIdProduct) }
      />
    </>
  );
}

export default ProductUpdate;
