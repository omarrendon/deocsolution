import {
  LOADING_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
 } from "../actions/usersActions";

const initialState = {
  isLoading: false,
  users: [],
  userCreate: false,
  modalError: {
    show: false,
    message: ''
  }
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERS:
      return{
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    case FETCH_USERS_ERROR:
    return {
      ...state,
      isLoading: false,
      modalError: {
        show: true,
        message: 'No se encontraron usuarios.'
      }
    };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userCreate: true,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        modalError: {
          show: true,
          message: 'Error al crear usuario'
        }
      };
    default:
      return state;
  }
};

export default usersReducers;