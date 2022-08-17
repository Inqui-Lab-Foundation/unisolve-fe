import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import admin from './admin/reducer';
import teacher from './teacher/reducer';
import sample from './sample/reducers';
import mentors from './mentors/reducer';
import modules from './modules/reducer';
import adminCourses from './adminCourses/reducer';
import adminEvalutors from './adminEvalutors/reducer';
import adminMentors from './adminMentors/reducer';
import adminNotifications from './adminNotifications/reducer';
import schoolRegistration from './schoolRegistration/reducers';
import evaluatorsBulkUpload from './evaluatorsBulkUpload/reducers';

const reducers = combineReducers({
    authUser,
    admin,
    adminCourses,
    sample,
    mentors,
    modules,
    adminEvalutors,
    adminMentors,
    adminNotifications,
    schoolRegistration,
    evaluatorsBulkUpload,
    teacher
});

export default reducers;
