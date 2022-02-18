import React from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import Products from './screens/Products';
import Contracts from './screens/Contracts';
import NotFound from './screens/NotFound';
import Provider from './context/UserProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/product" element={ <Products /> } />
          <Route path="/contract" element={ <Contracts /> } />
          <Route path="/notFound" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
