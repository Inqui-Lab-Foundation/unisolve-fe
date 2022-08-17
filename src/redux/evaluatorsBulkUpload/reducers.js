// Foulders Reducers //
import {
    EVALUATORS_BULKUPLOAD_LIST,
    EVALUATORS_BULKUPLOAD_LIST_SUCCESS,
    EVALUATORS_BULKUPLOAD_LIST_ERROR,
} from '../actions';

const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    evaluatorsBulkUploadList: [],
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case EVALUATORS_BULKUPLOAD_LIST:
        return { ...state, loading: true, error: '' };
    case EVALUATORS_BULKUPLOAD_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            evaluatorsBulkUploadList: action.payload,
            error: '',
        };
    case EVALUATORS_BULKUPLOAD_LIST_ERROR:
        return {
            ...state,
            loading: false,
            evaluatorsBulkUploadList: [],
            error: action.payload.message,
        };

    default:
        return newState;
    }
};
