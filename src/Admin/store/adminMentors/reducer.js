// Foulders Reducers //
import {
    ADMIN_MENTORS_LIST,
    ADMIN_MENTORS_LIST_SUCCESS,
    ADMIN_MENTORS_LIST_ERROR,
    ADMIN_MENTORS_STATUS_UPDATE,
    ADMIN_MENTORS_PAGE_NUMBER,
    ADMIN_MENTORS_PAGE_SIZE
} from '../../../redux/actions.js';

const INIT_STATE = {
    mentorsList: [],
    statusUpdated:'',
    page:0,
    limit:10,
    totalItems:0
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case ADMIN_MENTORS_LIST:
        return { ...state, loading: true, error: '' };
    case ADMIN_MENTORS_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            mentorsList: action.payload.user,
            totalItems:action.payload.totalItems,
            error: '',
        };
    case ADMIN_MENTORS_LIST_ERROR:
        return {
            ...state,
            loading: false,
            mentorsList: [],
            error: action.payload.message,
        };
    case ADMIN_MENTORS_STATUS_UPDATE:
        return {
            ...state,
            statusUpdated:"Updated"
        };
    case ADMIN_MENTORS_PAGE_NUMBER:
        return {
            ...state,
            page:action.payload
        };
    case ADMIN_MENTORS_PAGE_SIZE:
        return {
            ...state,
            limit:action.payload
        };
    default:
        return newState;
    }
};
