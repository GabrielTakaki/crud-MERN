import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { URL } from '../api';
import Label from '../components/Label';
import Context from '../context/Context';
import Button from '../components/Button';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { getContracts } from '../redux/ducks/api';
import { useSelector, useDispatch } from 'react-redux';
import ContractUpdate from '../components/ContractUpdate';
import { FiPlusCircle, FiSearch, FiTrash2, FiEdit } from 'react-icons/fi';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [filter, setFilter] = useState(false);
  const [filteredRes, setFilteredRes] = useState([]);
  const [socialReason, setSocialReason] = useState('');
  const [documentNumber, setDocumentNumber] = useState(0);
  const { contracts } = useSelector((state) => state.itemsReducer);
  const { user, setUpdateId, setModal, modal } = useContext(Context);

  const socialParam = socialReason.replace(/\s/g, '%');
  const companyParam = company.replace(/\s/g, '%');


  useEffect(() => {
    const getParams = async () => {
      try {
        const getParams = await axios.get(
          `${URL}/contract/search?documentNumber=${documentNumber}&socialReason=${socialParam}&company=${companyParam}`,
          { withCredentials: true }
        );
        setFilteredRes(getParams.data);
      } catch (e) {
        console.log(e);
      }
    };
    getParams();

  }, [documentNumber, socialParam, companyParam]);

  useEffect(() => {
    dispatch(getContracts());
  }, [dispatch]);

  const deleteContract = async (id) => {
    try {
      const req = await axios.delete(`${URL}/contract/${id}`, { withCredentials: true });
      if (req) {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <Header
        title="Products"
        icon={ <FiPlusCircle size={ 24 } /> }
        onClick={ () => navigate('/contract') }
        text="New contract"
        user={ user }
        buttonClass="header__button"
      />
      <main className="main">
        <form className="main__form" onSubmit={ (e) => e.preventDefault(e) }>
          <Label
            text="Document number"
            type="number"
            name="documentNumber"
            value={ documentNumber }
            onChange={ (e) => setDocumentNumber(e.target.value) }
            labelClass="main__label"
            labelInput="main__input"
            min="0"
          />
          <Label
            text="Social reason"
            type="text"
            name="socialReason"
            value={ socialReason }
            onChange={ (e) => setSocialReason(e.target.value) }
            labelClass="main__label"
            labelInput="main__input"
          />
          <Label
            text="company"
            type="text"
            name="company"
            value={ company }
            onChange={ (e) => setCompany(e.target.value) }
            labelClass="main__label"
            labelInput="main__input"
          />
          <label className="main__buttonLabel">
            <Button
              text="Search"
              icon={ <FiSearch size={ 24 } /> }
              onClick={ () => setFilter(true) }
              containerBtn="main__button"
              type="button"
            />
            <Button
              text="All"
              onClick={ () => setFilter(false) }
              containerBtn="main__button"
              type="button"
            />
          </label>
        </form>
        <table className="table">
          <tbody className="table__body">
            <tr className="table__title">
              <th>Document Nº</th>
              <th>Social reason</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
            {
              !filter ? contracts && contracts.map((item, index) => 
                <tr className="table__results" key={ item._id }>
                  <td className="table__data">{ item.documentNumber }</td>
                  <td className="table__data">{ item.socialReason }</td>
                  <td className="table__data">{ item.company }</td>
                  <td className="table__data">
                    <button onClick={ () => setUpdateId(item._id) }>
                      <FiEdit color="orange" onClick={ () => setModal(!modal) } size={ 20 } className="table__icon" />
                    </button>
                    <FiTrash2 color="red" onClick={ () => deleteContract(item._id) } size={ 20 } className="table__icon" />
                  </td>
                </tr>
              ) : filteredRes && filteredRes.map((item, index) => 
              <tr className="table__results" key={ item._id }>
                <td className="table__data">{ item.documentNumber }</td>
                <td className="table__data">{ item.socialReason }</td>
                <td className="table__data">{ item.company }</td>
                <td className="table__data">
                  <button onClick={ () => setUpdateId(item._id) }>
                    <FiEdit color="orange" onClick={ () => setModal(!modal) } size={ 20 } className="table__icon" />
                  </button>
                  <FiTrash2 color="red" onClick={ () => deleteContract(item._id) } size={ 20 } className="table__icon" />
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
        { modal && <ContractUpdate /> }
      </main>
    </>
  );
}

export default Products;
