import axios from 'axios';

import {
    GET_STUDENTS,
    GET_STUDENTS_LIST_ERROR,
    GET_STUDENTS_LIST_SUCCESS,
    UPDATE_STUDENT_STATUS
} from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';

export const getStudentListSuccess =
    (user) => async (dispatch) => {
        dispatch({
            type: GET_STUDENTS_LIST_SUCCESS,
            payload: user
        });
    };

export const getStudentListError =
    (message) => async (dispatch) => {
        dispatch({
            type: GET_STUDENTS_LIST_ERROR,
            payload: { message }
        });
    };

export const getStudentRegistationData = () => async (dispatch) => {
    try {
        dispatch({ type: GET_STUDENTS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getStudents}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            dispatch(getStudentListSuccess(data));
        } else {
            dispatch(
                getStudentListError(result.statusText)
            );
        }
    } catch (error) {
        dispatch(getStudentListError({}));
    }
};

export const updateStudentStatus = (data,id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_STUDENT_STATUS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .put(`${URL.updateStudentStatus + id}`, data, axiosConfig)
            .then((user) => console.log(user))
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            // const data =
            //     result.data &&
            //     result.data.data[0] &&
            //     result.data.data[0].dataValues;
            // dispatch(getAdminMentorsListSuccess(data));
        } else {
            dispatch(
                getStudentListError(result.statusText)
            );
        }
    } catch (error) {
        dispatch(
            getStudentListError({})
        );
    }
};

