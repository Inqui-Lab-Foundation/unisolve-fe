import axios from "axios";

import {
  EVALUATORS_BULKUPLOAD_LIST,
  EVALUATORS_BULKUPLOAD_LIST_SUCCESS,
  EVALUATORS_BULKUPLOAD_LIST_ERROR,
} from "../actions";
import { URL, KEY, UserRole } from "../../constants/defaultValues";
import { getCurrentUser, getNormalHeaders } from "../../helpers/Utils";
const currentUser = getCurrentUser("current_user");

export const getEvaluatorsBulkuploadListSuccess =
  (user) => async (dispatch) => {
    dispatch({
      type: EVALUATORS_BULKUPLOAD_LIST_SUCCESS,
      payload: user,
    });
  };

export const getEvaluatorsBulkuploadListError =
  (message) => async (dispatch) => {
    dispatch({
      type: EVALUATORS_BULKUPLOAD_LIST_ERROR,
      payload: { message },
    });
  };

export const getEvaluatorsBulkUploadList = (item) => async (dispatch) => {
  try {
    dispatch({ type: EVALUATORS_BULKUPLOAD_LIST });
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    const result = await axios
      .get(`${URL.getEvaluatorsBulkupload}`, axiosConfig)
      .then((user) => user)
      .catch((err) => {
        return err.response;
      });
    if (result && result.status === 200) {
      const data =
        result.data && result.data.data[0] && result.data.data[0].dataValues;
      dispatch(getEvaluatorsBulkuploadListSuccess(data));
      // history.push("/teams");
      // console.log("item=====================", data);
    } else {
      dispatch(getEvaluatorsBulkuploadListError(result.statusText));
    }
  } catch (error) {
    dispatch(getEvaluatorsBulkUploadList({}));
  }
};
