import axios from 'axios';
// import history from '../History';
export const LOGIN_REQUEST_POST = "LOGIN_REQUEST_POST";
export const LOGIN_REQUEST_RECEIVE = "LOGIN_REQUEST_RECEIVE";
export const LOGIN_REQUEST_DATA = "LOGIN_REQUEST_DATA";
export const VERIFY_LOGIN = "VERIFY_LOGIN";

const apiUrl =`http://localhost:8000`;

export const createPostSuccess =  (data) => {
    console.log(data);
    return {
        type: LOGIN_REQUEST_RECEIVE,
        payload: data
    }
};


export const createPost = (loginData) => {
    console.log(loginData);
    return (dispatch) => {
        return axios.post(`${apiUrl}/login`, loginData)
            .then(response => {
                dispatch(createPostSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const goDashBoard =  (data) => {
    console.log("route",data);
    return {
        type: LOGIN_REQUEST_RECEIVE,
        payload: data
    }
};

export const verifyUser =  (data) => {
    console.log(data);
    return {
        type: LOGIN_REQUEST_RECEIVE,
        payload: data
    }
};


export const verifyUserFetch = (userData) => {
    console.log(userData);
    return (dispatch) => {
        return axios.get(`${apiUrl}/dashboard`, userData)
            .then(response => {
                let apiResponse = dispatch(verifyUser(response.data));
                // console.log("looking",apiResponse);

                return apiResponse;
            })
            .catch(error => {
                throw(error);
            });
    };
};