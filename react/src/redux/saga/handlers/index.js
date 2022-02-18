import { call, put } from 'redux-saga/effects';
import { setContracts, setProducts, setCountries } from '../../ducks/api';
import { requestContracts, requestProducts, requestCountries } from '../requests';

export function* getContracts(_action) {
  try {
    const { data } = yield call(requestContracts);
    yield put(setContracts(data));
  } catch (e) {
    console.log(e)
  }
};

export function* getProducts(_action) {
  try {
    const { data } = yield call(requestProducts);
    yield put(setProducts(data));
  } catch (e) {
    console.log(e)
  }
};

export function* getCountries(_action) {
  try {
    const { data } = yield call(requestCountries);
    yield put(setCountries(data));
  } catch (e) {
    console.log(e)
  }
};
