import axios from 'axios';

import {
    TEACHER_LOGIN_USER,
    TEACHER_LOGIN_USER_SUCCESS,
    TEACHER_LOGIN_USER_ERROR,
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import {
    setCurrentUser,
    getNormalHeaders,
    openNotificationWithIcon,
} from '../../../helpers/Utils.js';

export const teacherLoginUserSuccess = (user) => async (dispatch) => {
    dispatch({
        type: TEACHER_LOGIN_USER_SUCCESS,
        payload: user,
    });
};
export const teacherLoginUserError = (message) => async (dispatch) => {
    dispatch({
        type: TEACHER_LOGIN_USER_ERROR,
        payload: { message },
    });
};

export const teacherLoginUser = (data, history) => async (dispatch) => {
    try {
        const loginData = {
            ...data,
            passwordConfirmation: data.password,
        };
        dispatch({ type: TEACHER_LOGIN_USER });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        console.log(URL.teacherLogin);
        const result = await axios
            .post(`${URL.teacherLogin}`, loginData, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('============', result);
        if (result && result.status === 200) {
            const item = result.data;
            console.log('============', item);
            setCurrentUser(item);
            dispatch(teacherLoginUserSuccess(result));
            history.push('/teacher/dashboard');
        } else {
            openNotificationWithIcon('error', 'Oops..! Seems Wrong Credentials.');
            dispatch(teacherLoginUserError(result.statusText));
        }
    } catch (error) {
        dispatch(teacherLoginUserError({}));
    // NotificationManager.error(
    //   "Server down! Please try again later.",
    //   "Error",
    //   3000
    // );
    }
};

export const teacherLoginUserLogOut = (history) => async () => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        console.log(URL.adminLogOut);
        const result = await axios

            .get(`${URL.teacherLogOut}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('====result', result);
        if (result && result.status === 200) {
            setCurrentUser();
            localStorage.removeItem('headerOption');
            history.push('/teacher');
        }
    } catch (error) {
        console.log('Somethinng went wrong in teachers actions');
    }
};
