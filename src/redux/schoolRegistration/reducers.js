// Foulders Reducers //
import {
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST,
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS,
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR,
} from '../actions';

const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    schoolsRegistrationList: [],
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case SCHOOL_REGISTRATOION_BULKUPLOAD_LIST:
        return { ...state, loading: true, error: '' };
    case SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            schoolsRegistrationList: action.payload,
            error: '',
        };
    case SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR:
        return {
            ...state,
            loading: false,
            schoolsRegistrationList: [],
            error: action.payload.message,
        };

    default:
        return newState;
    }
};
