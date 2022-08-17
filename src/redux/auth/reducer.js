// Foulders Reducers //
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../actions';

const INIT_STATE = {
    currentUser: {},
    loading: false,
    error: '',
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case LOGIN_USER:
        return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
        return {
            ...state,
            loading: false,
            currentUser: action.payload,
            error: '',
        };
    case LOGIN_USER_ERROR:
        return {
            ...state,
            loading: false,
            currentUser: null,
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
