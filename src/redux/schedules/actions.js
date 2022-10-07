import axios from 'axios';

import {
    GET_SCHEDULES
} from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';

export const getScheduleSuccess =
    (data) => async (dispatch) => {
        dispatch({
            type: GET_SCHEDULES,
            payload: data
        });
    };
export const getSchedulesForTeacherAndStudents = () => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getScheduleDates}`, axiosConfig)
            .then((data) => data)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result?.data?.data.length > 0 &&
                result?.data?.data;
            dispatch(getScheduleSuccess(data));
        } else {
            dispatch(
                getScheduleSuccess([])
            );
        }
    } catch (error) {
        dispatch(getScheduleSuccess([]));
    }
};
