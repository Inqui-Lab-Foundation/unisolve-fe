import axios from 'axios';

import {
    ADMIN_NOTIFICATIONS_LIST,
    ADMIN_NOTIFICATIONS_LIST_SUCCESS,
    ADMIN_NOTIFICATIONS_LIST_ERROR
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getAdminNotificationsListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_NOTIFICATIONS_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminNotificationsListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_NOTIFICATIONS_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminNotificationsList = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_NOTIFICATIONS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getNotificationsList}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        // console.log("----", result);
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getAdminNotificationsListSuccess(data));
            // history.push("/teams");
        } else {
            dispatch(getAdminNotificationsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminNotificationsListError({}));
    }
};
