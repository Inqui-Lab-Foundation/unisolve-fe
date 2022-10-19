import axios from 'axios';

// import {
//     ADMIN_DELETE_TEMP_MENTOR
// } from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import {
    getNormalHeaders,
    // openNotificationWithIcon
} from '../../../helpers/Utils.js';

// export const deleteTempMentor =
//     (user) => async (dispatch) => {
//         dispatch({
//             type: ADMIN_DELETE_TEMP_MENTOR,
//             payload: user
//         });
//     };

const deleteTempMentorById = (id) => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .delete(`${URL.getStudentById}${id}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
            console.log(result);
        // if (result && result.status === 200) {
        //     const data =
        //         result.data &&
        //         result.data.data[0] &&
        //         result.data.data[0];
        //     dispatch(getAdminSuccess(data)); 
        // } else {
        //     dispatch(
        //         getAdminError(result.statusText)
        //     );
        // }
    } catch (error) {
        console.log(error);
        // dispatch(getAdminError({}));
    }
};

