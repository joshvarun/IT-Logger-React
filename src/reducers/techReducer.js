import {
  GET_TECHS,
  ADD_TECHS,
  DELETE_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

const initialState = {
  techs: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECHS:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECHS:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case TECHS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
