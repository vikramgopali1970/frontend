import axios from 'axios';
import {setCookie} from "../cookie";
// import history from '../History';
export const LOGIN_REQUEST_POST = "LOGIN_REQUEST_POST";
export const LOGIN_REQUEST_RECEIVE = "LOGIN_REQUEST_RECEIVE";
export const LOGIN_REQUEST_DATA = "LOGIN_REQUEST_DATA";
export const VERIFY_LOGIN = "VERIFY_LOGIN";

const apiUrl =`http://localhost:8000`;

export const createPostSuccess =  (data) => {
    return {
        type: LOGIN_REQUEST_RECEIVE,
        data
    }
};


export const createPost = (loginData) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/login`, loginData)
            .then(response => {
                setCookie("company",response.data.token,1);
                dispatch(createPostSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const goDashBoard =  (data) => {
    return {
        type: LOGIN_REQUEST_RECEIVE,
        payload: data
    }
};

export const verifyUser =  (data) => {
    return {
        type: LOGIN_REQUEST_RECEIVE,
        payload: data
    }
};


export const verifyUserFetch = (userData) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/dashboard`, userData)
            .then(response => {
                let apiResponse = dispatch(verifyUser(response.data));
                return apiResponse;
            })
            .catch(error => {
                throw(error);
            });
    };
};