import axios from 'axios';

import {
    MENTORS_CREATE,
    MENTORS_CREATE_SUCCESS,
    MENTORS_CREATE_ERROR,
    MENTORS_LIST,
    MENTORS_LIST_SUCCESS,
    MENTORS_LIST_ERROR,
    MENTORS_DELETE,
    MENTORS_DELETE_SUCCESS,
    MENTORS_DELETE_ERROR,
    MENTORS_EDIT,
    MENTORS_EDIT_SUCCESS,
    MENTORS_EDIT_ERROR,
    MENTORS_LANGUAGE,
    GET_TEACHERS,
    MENTORS_GET_SUPPORT_TICKETS,
    MENTORS_GET_SUPPORT_TICKETS_BY_ID
    // MENTORS_CREATE_SUPPORT_TICKETS
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders, openNotificationWithIcon } from '../../../helpers/Utils.js';

export const mentorCreateSuccess = (user) => async (dispatch) => {
    dispatch({
        type: MENTORS_CREATE_SUCCESS,
        payload: user
    });
};
export const getMentorGlobalLanguage =
    (language) => async (dispatch) => {
        dispatch({
            type: MENTORS_LANGUAGE,
            payload: language
        });
    };
export const mentorCreateError = (message) => async (dispatch) => {
    dispatch({
        type: MENTORS_CREATE_ERROR,
        payload: { message }
    });
};

export const mentorCreate = (data, history) => async (dispatch) => {
    try {
        dispatch({ type: MENTORS_CREATE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(`${URL.addMentor}`, data, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            // dispatch(mentorCreateSuccess(item));
            history.push('/teams');
        } else {
            dispatch(mentorCreateError(result.statusText));
        }
    } catch (error) {
        dispatch(mentorCreateError({}));
    }
};

export const getMentorsListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: MENTORS_LIST_SUCCESS,
        payload: user
    });
};

export const getMentorsListError = (message) => async (dispatch) => {
    dispatch({
        type: MENTORS_LIST_ERROR,
        payload: { message }
    });
};


export const getStudentByIdData = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_TEACHERS });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getStudentById}${id}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0];
            dispatch(getMentorsListSuccess(data)); 
        } else {
            dispatch(
                getMentorsListError(result.statusText)
            );
        }
    } catch (error) {
        dispatch(getMentorsListError({}));
    }
};

export const getMentorsList = (history) => async (dispatch) => {
    try {
        dispatch({ type: MENTORS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getMentors}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getMentorsListSuccess(data));
            history.push('/teams');
        } else {
            dispatch(getMentorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getMentorsListError({}));
    }
};

export const deleteMentorSuccess = (user) => async (dispatch) => {
    dispatch({
        type: MENTORS_DELETE_SUCCESS,
        payload: user
    });
};

export const deleteMentorError = (message) => async (dispatch) => {
    dispatch({
        type: MENTORS_DELETE_ERROR,
        payload: { message }
    });
};
 
export const deleteMentor = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: MENTORS_DELETE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .delete(`${URL.deleteMentor + '/' + courseId}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data.text;
            dispatch(deleteMentorSuccess(data));
        } else {
            dispatch(deleteMentorError(result.statusText));
        }
    } catch (error) {
        dispatch(deleteMentorError({}));
    }
};

export const mentorsEditSuccess = (user) => async (dispatch) => {
    dispatch({
        type: MENTORS_EDIT_SUCCESS,
        payload: user
    });
};

export const mentorsEditError = (message) => async (dispatch) => {
    dispatch({
        type: MENTORS_EDIT_ERROR,
        payload: { message }
    });
};

export const mentorsEdit = (courseId, data, history) => async (dispatch) => {
    console.log('-------------', data);
    try {
        dispatch({ type: MENTORS_EDIT });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .put(`${URL.updateMentor + '/' + courseId}`, data, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('========result', result);
        if (result && result.status === 200) {
            // const data = result.data.text;
            // dispatch(mentorsEditSuccess(data));
            history.push('/teams');
        } else {
            dispatch(mentorsEditError(result.statusText));
        }
    } catch (error) {
        dispatch(mentorsEditError({}));
    }
};
export const getSupportTicketsSuccess = (tickets) => async (dispatch) => {
    dispatch({
        type: MENTORS_GET_SUPPORT_TICKETS,
        payload: tickets
    });
};
export const getSupportTickets = (history) => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getMentorSupportTickets}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data.data[0].dataValues.length > 0 ?
                result.data.data[0].dataValues.map((item,i)=>{
                    item.id=i+1;
                    return item;
                }) :[];

            dispatch(getSupportTicketsSuccess(data));
            history.push('/teams');
        } else {
            dispatch(getMentorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getMentorsListError({}));
    }
};

// export const createSupportTicketsSuccess = (tickets) => async (dispatch) => {
//     dispatch({
//         type: ,
//         payload: tickets
//     });
// };

export const createSupportTickets = (data, history) => async () => {
    try {
       
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(`${URL.createMentorSupportTickets}`, data, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        
        if (result && result.status === 201) {
            
            history.push('/teacher/support-journey');
            openNotificationWithIcon('success',
                'Ticket Created Sucessfully!',
                '');
        } else {
            openNotificationWithIcon('error',
                'Something went wrong!',
                '');
        }
    } catch (error) {
        openNotificationWithIcon('error',
            'Something went wrong!',
            '');
        
    }
};

export const getSupportTicketByIdSuccess = (tickets) => async (dispatch) => {
    dispatch({
        type: MENTORS_GET_SUPPORT_TICKETS_BY_ID,
        payload: tickets
    });
};

export const getSupportTicketById = (id) => async (dispatch) => {
    console.log(id);
    try {
       
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .post(`${URL.getMentorSupportTicketsById}/${id}`,  axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        
        if (result && result.status === 200) {
            console.log(result);
            dispatch(getSupportTicketByIdSuccess(result));
           
        } else {
            openNotificationWithIcon('error',
                'Something went wrong!',
                '');
        }
    } catch (error) {
        openNotificationWithIcon('error',
            'Something went wrong!',
            '');
        
    }
};
