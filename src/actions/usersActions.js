import axios from "axios";

export const LOADING_USERS = 'LOADING_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const loading = () => ({
  type: LOADING_USERS,
});

export const fetchUsers = ({ user, token }) => {
  return async (dispatch) => {
    try {
      console.log('Token', token);
      dispatch(loading());
      const body = {
        "Body": {
          "SearchText": user ? user : "juan"
        }
      }
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      const URL = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/GetUsers'
      const { data } = await axios.post(URL, body, {
        headers
      });
      console.log('DATA RESPONSE', data);
      dispatch(fetchUsersSuccess(data.Body));
    } catch (error) {
      console.log('ERROR IN FETCH USERS', error);
      dispatch(fetchUsersError(error));
    }
  };
};

const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error
});

export const createUser = ({ name, lastNameF, lastNameM, email, phone, user, pass, passRepeat, token}) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const URL = 'https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/RegisterUserRole';
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      const body = {
        "Body": {
          "Tenant": null,
          "UserName": user,
          "Password": pass,
          "Name": name,
          "FatherLastName": lastNameF,
          "MotherLastName": lastNameM,
          "Email": email,
          "PhoneNumber": phone,
          "Metadata": null,
          "Roles": [
            {
              "Id": 2,
              "Name": "Usuario Tradicional"
            }
          ]
        }
      }
      const { data } = await axios.post(URL, body, {headers});
      dispatch(createUserSucces(data));
    } catch (error) {
      console.log('ERROR IN CREATE USER', error);
      dispatch(createUserError(error));
    }
  };
};

const createUserSucces = (data) => ({
  type: CREATE_USER_SUCCESS,
  payload: data,
});

const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error
});