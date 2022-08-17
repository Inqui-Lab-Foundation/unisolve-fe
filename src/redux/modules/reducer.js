// Foulders Reducers //
import {
    MODULES_LIST,
    MODULES_LIST_SUCCESS,
    MODULES_LIST_ERROR,
} from '../actions';

const INIT_STATE = {
    loading: false,
    error: '',
    successDleteMessage: '',
    modulesList: [],
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case MODULES_LIST:
        return { ...state, loading: true, error: '' };
    case MODULES_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            modulesList: action.payload,
            error: '',
        };
    case MODULES_LIST_ERROR:
        return {
            ...state,
            loading: false,
            modulesList: [],
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
