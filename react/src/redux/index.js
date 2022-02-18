import { itemsReducer } from './ducks/api';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { contractsSaga, productsSaga, countriesSaga } from './saga/rootSaga';

const rootReducer = combineReducers({
  itemsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
  
sagaMiddleware.run(productsSaga);
sagaMiddleware.run(contractsSaga);
sagaMiddleware.run(countriesSaga);

export default store;
