import axios from 'axios';

import {
    TEACHER_COURSES_DETAILS,
    TEACHER_COURSES_DETAILS_SUCCESS,
    TEACHER_COURSES_DETAILS_ERROR,
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getTeacherCourseDetailsSuccess = (user) => async (dispatch) => {
    dispatch({
        type: TEACHER_COURSES_DETAILS_SUCCESS,
        payload: user
    });
};

export const getTeacherCourseDetailsError = (message) => async (dispatch) => {
    dispatch({
        type: TEACHER_COURSES_DETAILS_ERROR,
        payload: { message }
    });
};

export const getTeacherCourseDetails = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: TEACHER_COURSES_DETAILS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getTeacherCousesDetails + courseId}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getTeacherCourseDetailsSuccess(data));
        } else {
            dispatch(getTeacherCourseDetailsError(result.statusText));
        }
    } catch (error) {
        dispatch(getTeacherCourseDetailsError({}));
    }
};
