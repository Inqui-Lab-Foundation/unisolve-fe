// Foulders Reducers //
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,STEP_TWO_DATA } from '../actions';

const INIT_STATE = {
    currentUser: {},
    loading: false,
    error: '',
    stepTwoData:{},
    editData :{}
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
    case STEP_TWO_DATA:
        return {
            ...state,
            currentUser: null,
            loading: false,
            error: '',
            stepTwoData:action.payload
        };
    default:
        return newState;
    }
};
