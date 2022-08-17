import axios from 'axios';

import {
    ADMIN_COURSES_LIST,
    ADMIN_COURSES_LIST_SUCCESS,
    ADMIN_COURSES_LIST_ERROR,
    ADMIN_COURSES_DETAILS,
    ADMIN_COURSES_DETAILS_SUCCESS,
    ADMIN_COURSES_DETAILS_ERROR,
    ADMIN_COURSES_QUESTIONS,
    ADMIN_COURSES_QUESTIONS_SUCCESS,
    ADMIN_COURSES_QUESTIONS_ERROR,
    ADMIN_COURSES_QUESTIONS_RESPONCE,
    ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS,
    ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR,
    ADMIN_COURSES_REF_QUESTIONS,
    ADMIN_COURSES_REF_QUESTIONS_SUCCESS,
    ADMIN_COURSES_REF_QUESTIONS_ERROR,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR,
    ADMIN_COURSES_CREATE,
    ADMIN_COURSES_CREATE_SUCCESS,
    ADMIN_COURSES_CREATE_ERROR
} from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';

export const getAdminCorsesListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminCoursesListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminCoursesList = () => async (dispatch) => {
    // console.log("aaaaaaaaaaaaaaaaaaaaaa");
    try {
        dispatch({ type: ADMIN_COURSES_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getAdminCouses}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('=====---------------', result);
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getAdminCorsesListSuccess(data));
            // history.push("admin/courses");
        } else {
            dispatch(getAdminCoursesListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminCoursesListError({}));
    }
};

export const adminCoursesCreateSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_CREATE_SUCCESS,
        payload: user
    });
};

export const adminCoursesCreateError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_CREATE_ERROR,
        payload: { message }
    });
};

export const adminCoursesCreate = (data, history) => async (dispatch) => {
    console.log('========', data);
    try {
        dispatch({ type: ADMIN_COURSES_CREATE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(`${URL.addAdminCourses}`, data, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });

        if (result && result.status === 201) {
            dispatch(adminCoursesCreateSuccess('Course Successfully Create'));
            setTimeout(() => {
                history.push('/admin/playvideo');
                dispatch(adminCoursesCreateSuccess(''));
            }, 1000);
            // history.push("/teams");
        } else {
            dispatch(adminCoursesCreateError(result.statusText));
        }
    } catch (error) {
        dispatch(adminCoursesCreateError({}));
    }
};

export const getAdminCourseDetailsSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_DETAILS_SUCCESS,
        payload: user
    });
};

export const getAdminCourseDetailsError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_DETAILS_ERROR,
        payload: { message }
    });
};

export const getAdminCourseDetails = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_COURSES_DETAILS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getAdminCousesDetails + courseId}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('=====---------------', result);
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getAdminCourseDetailsSuccess(data));
        } else {
            dispatch(getAdminCourseDetailsError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminCourseDetailsError({}));
    }
};

export const getAdminQuizQuestionsSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_QUESTIONS_SUCCESS,
        payload: user
    });
};

export const getAdminQuizQuestionsError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_QUESTIONS_ERROR,
        payload: { message }
    });
};

export const getAdminQuizQuestions = (quizId) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_COURSES_QUESTIONS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(
                `${URL.getAdminQstList + quizId + '/' + 'nextQuestion'}`,
                axiosConfig
            )
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result;
            console.log('==========daya==', data);
            dispatch(getAdminQuizQuestionsSuccess(data));
            dispatch(getAdminQuizResponceSuccess({}));
        } else {
            dispatch(getAdminQuizQuestionsError(result.statusText));
            dispatch(getAdminQuizResponceSuccess({}));
        }
    } catch (error) {
        dispatch(getAdminQuizQuestionsError({}));
        dispatch(getAdminQuizResponceSuccess({}));
    }
};

export const getAdminQuizResponceSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS,
        payload: user
    });
};

export const getAdminQuizResponceError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR,
        payload: { message }
    });
};

export const getAdminQuizResponce = (quizId, body) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_COURSES_QUESTIONS_RESPONCE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(
                `${URL.putAdminQuizResponce + quizId + '/' + 'response'}`,
                body,
                axiosConfig
            )
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        // console.log("=====---------------", result);
        if (result && result.status === 200) {
            const data = result;
            dispatch(getAdminQuizResponceSuccess(data));
        } else {
            dispatch(getAdminQuizResponceError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminQuizResponceError({}));
    }
};

export const getAdminRfQuizResponceSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS,
        payload: user
    });
};

export const getAdminRfQuizResponceError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR,
        payload: { message }
    });
};

export const getAdminRfQuizResponce = (quizId, body) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_COURSES_REF_QUESTIONS_RESPONCE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(
                `${URL.postAdminRefQuizResponce + quizId + '/' + 'response'}`,
                body,
                axiosConfig
            )
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        // console.log("=====---------------", result);
        if (result && result.status === 200) {
            const data = result;
            dispatch(getAdminRfQuizResponceSuccess(data));
        } else {
            dispatch(getAdminRfQuizResponceError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminRfQuizResponceError({}));
    }
};

export const getAdminRefQuizQstSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_REF_QUESTIONS_SUCCESS,
        payload: user
    });
};

export const getAdminRefQuizQstError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_COURSES_REF_QUESTIONS_ERROR,
        payload: { message }
    });
};

export const getAdminRefQuizQst = (refQizId) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_COURSES_REF_QUESTIONS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(
                `${URL.getAdminRefQizList + refQizId + '/' + 'nextQuestion'}`,
                axiosConfig
            )
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result;
            dispatch(getAdminRfQuizResponceSuccess({}));
            dispatch(getAdminRefQuizQstSuccess(data));
        } else {
            dispatch(getAdminRfQuizResponceSuccess({}));
            dispatch(getAdminRefQuizQstError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminRefQuizQstError({}));
        dispatch(getAdminRfQuizResponceSuccess({}));
    }
};
