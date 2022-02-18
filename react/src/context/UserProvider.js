import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState('');
  const [productModal, setProductModal] = useState(false);
  const [updateIdProduct, setUpdateIdProduct] = useState('');
  

  const providerState = {
    user,
    setUser,

    updateId,
    setUpdateId,

    modal,
    setModal,

    productModal,
    setProductModal,

    updateIdProduct,
    setUpdateIdProduct,
  };

  return (
    <Context.Provider value={ providerState }>
      {children}
    </Context.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserProvider;
