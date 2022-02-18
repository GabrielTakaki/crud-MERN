export const Types = {
  GET_CONTRACTS: 'contract/GET_CONTRACTS',
  SET_CONTRACTS: 'contract/SET_CONTRACTS',

  GET_PRODUCTS: 'product/GET_PRODUCTS',
  SET_PRODUCTS: 'product/SET_PRODUCTS',

  GET_COUNTRIES: 'product/GET_COUNTRIES',
  SET_COUNTRIES: 'product/SET_COUNTRIES',
};

const INITIAL_STATE = {
  loading: false,
  contracts: [],
  products: [],
  countries: [],
  error: '',
};

export const getContracts = () => ({
  type:Types.GET_CONTRACTS,
});

export const setContracts = data => ({
  type:Types.SET_CONTRACTS,
  data,
});

export const getProducts = () => ({
  type:Types.GET_PRODUCTS,
});

export const setProducts = data => ({
  type:Types.SET_PRODUCTS,
  data,
});

export const getCountries = () => ({
  type:Types.GET_COUNTRIES,
});

export const setCountries = data => ({
  type:Types.SET_COUNTRIES,
  data,
});

export const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_CONTRACTS:
      const { data } = action;
      return { ...state, contracts: data };
    case Types.SET_PRODUCTS:
      return { ...state, products: action.data };
    case Types.SET_COUNTRIES:
      return { ...state, countries: action.data };
    default:
      return state;
  }
};
