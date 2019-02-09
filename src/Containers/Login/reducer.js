import { LOGIN_REQUEST_DATA, LOGIN_REQUEST_POST, LOGIN_REQUEST_RECEIVE, VERIFY_LOGIN } from '../../Actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case LOGIN_REQUEST_DATA:
            return { ...state, channel: action.channel };
        case LOGIN_REQUEST_POST:
            return { ...state, loading: true };
        case LOGIN_REQUEST_RECEIVE:
            return { ...state, json: action, loading: false };
        case VERIFY_LOGIN:
            return { ...state, json: action, loading: false };
        default:
            return state;
    }
};
export default reducer;

