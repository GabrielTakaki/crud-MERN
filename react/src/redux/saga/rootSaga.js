import { takeLatest } from 'redux-saga/effects';
import { Types } from '../ducks/api';
import { getContracts, getProducts, getCountries } from './handlers';

export function* contractsSaga() {
  yield takeLatest(Types.GET_CONTRACTS, getContracts);
};

export function* productsSaga() {
  yield takeLatest(Types.GET_PRODUCTS, getProducts);
};

export function* countriesSaga() {
  yield takeLatest(Types.GET_COUNTRIES, getCountries);
};
