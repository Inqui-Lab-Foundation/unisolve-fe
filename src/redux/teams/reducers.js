// Folders Reducers //
import {
    GET_MYTEAM,
    GET_MYTEAM_SUCCESS,
    GET_MYTEAM_ERROR
} from '../actions';

const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    myTeam: [],
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_MYTEAM:
        return { ...state, loading: true, error: '' };
    case GET_MYTEAM_SUCCESS:
        return {
            ...state,
            loading: false,
            myTeam: action.payload,
            error: '',
        };
    case GET_MYTEAM_ERROR:
        return {
            ...state,
            loading: false,
            myTeam: [],
            error: action.payload.message,
        };

    default:
        return newState;
    }
};
