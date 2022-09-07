import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import admin from '../Admin/store/admin/reducer';
import teacher from '../Teachers/store/teacher/reducer';
import sample from './sample/reducers';
import mentors from '../Teachers/store/mentors/reducer';
import modules from './modules/reducer';
import adminCourses from '../Admin/Courses/store/adminCourses/reducer';
import adminEvalutors from '../Admin/store/adminEvalutors/reducer';
import adminMentors from '../Admin/store/adminMentors/reducer';
import adminNotifications from '../Admin/store/adminNotifications/reducer';
import schoolRegistration from './schoolRegistration/reducers';
import evaluatorsBulkUpload from './evaluatorsBulkUpload/reducers';
import teams from '../Teachers/store/teams/reducer';
import teacherCourses from '../Teachers/store/courses/reducer';
import studentRegistration from './studentRegistration/reducers';
import studentTeam from './teams/reducers';

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
    studentRegistration,
    evaluatorsBulkUpload,
    teacher,
    teacherCourses,
    teams,
    studentTeam
});

export default reducers;
