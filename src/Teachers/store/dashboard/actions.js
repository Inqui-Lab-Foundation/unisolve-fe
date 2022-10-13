import axios from 'axios';

import { TEACHER_DASHBOARD_STATES_SUCCESS } from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import {
    getNormalHeaders,
    openNotificationWithIcon
} from '../../../helpers/Utils.js';

export const getDashboardStatesSuccess = (data) => async (dispatch) => {
    dispatch({
        type: TEACHER_DASHBOARD_STATES_SUCCESS,
        payload: data
    });
};


export const getDashboardStates = (id) => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getTeacherDashboardStatesById}${id}`, axiosConfig)
            .then((data) => data)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const item = result.data.data[0];
            dispatch(getDashboardStatesSuccess(item));
        } else {
            openNotificationWithIcon('error', 'Something went wrong');
        }
    } catch (error) {
        dispatch(getDashboardStatesSuccess(''));
    }
};
