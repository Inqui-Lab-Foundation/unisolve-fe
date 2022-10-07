export const adminRoot = '/admin';

export const UserRole = {
    // USER ROLE //
};

export const URL = {
    // Post //
    login: process.env.REACT_APP_API_BASE_URL + '/students/login',
    adminLogin: process.env.REACT_APP_API_BASE_URL + '/admins/login',
    teacherLogin: process.env.REACT_APP_API_BASE_URL + '/mentors/login',
    addMentor: process.env.REACT_APP_API_BASE_URL + '/mentors/create',
    addAdminCourses: process.env.REACT_APP_API_BASE_URL + '/course',
    submitChallengeResponse:
        process.env.REACT_APP_API_BASE_URL + '/challenge/1/responses',
    postAdminRefQuizResponce:
        process.env.REACT_APP_API_BASE_URL + '/reflectiveQuiz/',
    createMentorSupportTickets:
        process.env.REACT_APP_API_BASE_URL + '/supportTickets',
    createMentorSupportTicketResponse:
        process.env.REACT_APP_API_BASE_URL + '/supportTicketsReply',
    createOrganization:
        process.env.REACT_APP_API_BASE_URL + '/organizations/createOrg',

    //Put//
    changePassword: process.env.REACT_APP_API_BASE_URL + '/auth/changePassword',
    updatePassword:
        process.env.REACT_APP_API_BASE_URL + '/mentors/updatePassword',
    updateMobile: process.env.REACT_APP_API_BASE_URL + '/mentors/updateMobile',
    updateMentor: process.env.REACT_APP_API_BASE_URL + '/mentors/update',
    updateMentorStatus: process.env.REACT_APP_API_BASE_URL + '/mentors',
    updateStudentStatus: process.env.REACT_APP_API_BASE_URL + '/students',
    putAdminQuizResponce: process.env.REACT_APP_API_BASE_URL + '/quiz/',

    updateSupportTicketResponse:
        process.env.REACT_APP_API_BASE_URL + '/supportTickets',

    //Delete//
    deleteMentor: process.env.REACT_APP_API_BASE_URL + '/mentor/delete',

    //Get//
    logOut: process.env.REACT_APP_API_BASE_URL + '/auth/logout',
    adminLogOut: process.env.REACT_APP_API_BASE_URL + '/auth/logout',
    teacherLogOut: process.env.REACT_APP_API_BASE_URL + '/auth/logout',
    getMentors: process.env.REACT_APP_API_BASE_URL + '/mentors',
    getModules: process.env.REACT_APP_API_BASE_URL + '/modules/list',
    getAdminCouses: process.env.REACT_APP_API_BASE_URL + '/courses',
    getAdminCousesDetails: process.env.REACT_APP_API_BASE_URL + '/courses/',
    getAdminEvaluator: process.env.REACT_APP_API_BASE_URL + '/evaluator/list',
    getNotificationsList:
        process.env.REACT_APP_API_BASE_URL + '/notifications/tome',
    getAdminQstList: process.env.REACT_APP_API_BASE_URL + '/quiz/',
    getAdminRefQizList: process.env.REACT_APP_API_BASE_URL + '/reflectiveQuiz/',
    getSchoolRegistrationBulkupload:
        process.env.REACT_APP_API_BASE_URL + '/organizations',
    getFaqCategoryList: `${process.env.REACT_APP_API_BASE_URL}/faqCategories`,
    getFaqByCategoryId: `${process.env.REACT_APP_API_BASE_URL}/faqCategories`,
    getFaqList: `${process.env.REACT_APP_API_BASE_URL}/faqs`,
    checkOrg: `${process.env.REACT_APP_API_BASE_URL}/organizations/checkOrg`,
    mentorRegister: `${process.env.REACT_APP_API_BASE_URL}/mentors/register`,
    mentorOTP: `${process.env.REACT_APP_API_BASE_URL}/mentors/validateOtp`,
    mentorChangePwd: `${process.env.REACT_APP_API_BASE_URL}/mentors/changePassword`,
    getTeamsList: `${process.env.REACT_APP_API_BASE_URL}/teams`,
    getTeamMembersList: `${process.env.REACT_APP_API_BASE_URL}/teams/`,
    getPreSurveyList: `${process.env.REACT_APP_API_BASE_URL}/quizSurveys`,
    getPostSurveyList: `${process.env.REACT_APP_API_BASE_URL}/quizSurveys`,
    getTeacherCousesDetails:
        process.env.REACT_APP_API_BASE_URL + '/mentorCourses/',
    getStudents: process.env.REACT_APP_API_BASE_URL + '/students',
    getStudentById: process.env.REACT_APP_API_BASE_URL + '/students/',
    getChallengeQuestions: process.env.REACT_APP_API_BASE_URL + '/challenge',
    getChallengeSubmittedResponse:
        process.env.REACT_APP_API_BASE_URL +
        '/challenge/submittedDetails?team_id=',
    getMentorSupportTickets:
        process.env.REACT_APP_API_BASE_URL + '/supportTickets',
    getMentorSupportTicketsById:
        process.env.REACT_APP_API_BASE_URL + '/supportTickets/',
    getMentorSupportTicketResponsesById:
        process.env.REACT_APP_API_BASE_URL + '/supportTicketsReply',
    getMentorAttachments:
        process.env.REACT_APP_API_BASE_URL + '/mentorAttachments',
    getDistricts: process.env.REACT_APP_API_BASE_URL + '/dashboard/mapStats',
    getDistrictsLive:
        process.env.REACT_APP_API_BASE_URL + '/dashboard/refreshMapStatsLive',
    getScheduleDates:
        process.env.REACT_APP_API_BASE_URL + '/auth/roadMap'
};
const API = 'O10ZPA0jZS38wP7cO9EhI3jaDf24WmKX62nWw870';

export const KEY = {
    User_API_Key: API
};

export const isAuthGuardActive = true;
