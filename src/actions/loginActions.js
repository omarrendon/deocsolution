import axios from "axios";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';

export const login = ({ email, password}) => {
  return async (dispatch) => {
    try {
      dispatch(loading());

      const body = {
        "Body": {
          "Username": email,
            "Password": password
        }
      }
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      console.log('DATA', body);
      const URL = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication'
      const { data } = await axios.post(URL, body, {
        headers
      });
      console.log('REQUEST', data);
      dispatch(loginSuccess(data));
    } catch (error) {
      console.log('ERROR IN LOGIN ACTION => ', error);
      dispatch(loginError(error));
    }
  };
};

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error
});

const loading = () => ({
  type: LOGIN_IS_LOADING,
});