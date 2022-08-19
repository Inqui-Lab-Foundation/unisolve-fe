// Foulders Reducers //
import {
    ADMIN_EVALUTORS_LIST,
    ADMIN_EVALUTORS_LIST_SUCCESS,
    ADMIN_EVALUTORS_LIST_ERROR,
} from '../../../redux/actions.js';

const INIT_STATE = {
    evalutorsList: [],
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case ADMIN_EVALUTORS_LIST:
        return { ...state, loading: true, error: '' };
    case ADMIN_EVALUTORS_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            evalutorsList: action.payload,
            error: '',
        };
    case ADMIN_EVALUTORS_LIST_ERROR:
        return {
            ...state,
            loading: false,
            evalutorsList: [],
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
