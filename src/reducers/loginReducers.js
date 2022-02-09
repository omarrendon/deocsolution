import { LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS } from "../actions/loginActions";

const initialState = {
  isLoading: false,
  session: {},
  modalError: {
    show: false,
    message: ''
  }
};

const loginReducer = ( state =  initialState, action) => {
  switch (action.type) {
    case LOGIN_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        session: action.payload, 
      };
    case LOGIN_ERROR:
      return{
        ...state,
        isLoading: false,
        modalError: {
          show: true,
          message: "Error al inicar sesión"
        },
      };
    default:
      return state;
  }
};

export default loginReducer;