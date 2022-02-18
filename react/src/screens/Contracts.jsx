import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { URL } from '../api';
import Context from '../context/Context';
import Header from '../components/Header';
import { INITIAL_STATE } from '../helpers';
import { useNavigate } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import { getProducts } from '../redux/ducks/api';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import ProductCreate from '../components/ProductCreate';
import ContractForm from '../components/ContractForm';
import { useSelector, useDispatch } from 'react-redux';
import ProductUpdate from '../components/ProductUpdate';


function Contracts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const { products } = useSelector((state) => state.itemsReducer);
  const { setUpdateIdProduct, productModal, setProductModal } = useContext(Context);

  const clearInput = () => {
    setState({ ...INITIAL_STATE });
  };

  const postContract = async (id) => {
    try {
      await axios.post(`${URL}/contract`, {
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
      clearInput();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const deleteContract = async (id) => {
    try {
      const req = await axios.delete(`${URL}/product/${id}`, { withCredentials: true });
      if (req) {
        window.location.reload(false);
      }

    } catch (error) {
      console.log(error);
    }
  };

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
    <div>
    <Header
      title="Create contract"
      icon={ <IoMdArrowBack size={ 24 } /> }
      onClick={ () => navigate('/product') }
      buttonClass="header__button"
      text="Back"
    />
      <section className="main">
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
          onClick={ () => postContract() }
        />
      </section>
      <Header
        title="Contract's Products"
        buttonClass="hide"
      />
      <section className="main">
        <ProductCreate />
        <table className="table">
          <tbody className="table__body">
            <tr className="table__title2">
              <th>Product</th>
              <th>Amount</th>
              <th>Final Unit Price</th>
              <th>Installments</th>
              <th>Paid Installments</th>
              <th>Beggining of Term</th>
              <th>Actions</th>
            </tr>
            {products && products.map((item, index) => 
              <tr className="table__results" key={ item._id }>
                <td className="table__data">{ item.product }</td>
                <td className="table__data">{ item.amount }</td>
                <td className="table__data">{ item.price }</td>
                <td className="table__data">{ item.installments }</td>
                <td className="table__data">{ item.paid }</td>
                <td className="table__data">{ item.beginning }</td>
                <td className="table__data">
                  <button onClick={ () => setUpdateIdProduct(item._id) }>
                    <FiEdit onClick={ () => setProductModal(!productModal) } color="orange" size={ 20 } className="table__icon" />
                  </button>
                  <FiTrash2 onClick={ () => deleteContract(item._id) } color="red" size={ 20 } className="table__icon" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {
          productModal && <ProductUpdate />
        }
      </section>
    </div>
  );
}

export default Contracts;
