// Foulders Reducers //
import {
    ADMIN_NOTIFICATIONS_LIST,
    ADMIN_NOTIFICATIONS_LIST_SUCCESS,
    ADMIN_NOTIFICATIONS_LIST_ERROR,
} from '../../../redux/actions.js';

const INIT_STATE = {
    notificationsList: [],
    NotificationCount: 0,
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case ADMIN_NOTIFICATIONS_LIST:
        return { ...state, loading: true, error: '' };
    case ADMIN_NOTIFICATIONS_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            notificationsList: action.payload.data,
            NotificationCount: action.payload.count,
            error: '',
        };
    case ADMIN_NOTIFICATIONS_LIST_ERROR:
        return {
            ...state,
            loading: false,
            notificationsList: [],
            NotificationCount: 0,
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
