export const HOST = import.meta.env.VITE_SERVER_URL

export const AUTH_ROUTES = "api/sag/auth";

export const ADD_SAG_USER_ROUTE= `${AUTH_ROUTES}/addSagUser`
export const SIGNIN_ROUTE = `${AUTH_ROUTES}/signin`
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`
export const CHECKAUTH_ROUTE = `${AUTH_ROUTES}/check-auth`
export const GET_ALL_USER_ROUTE = `${AUTH_ROUTES}/getAllUser`
export const GET_ALL_VERIFIED_ROUTE = `${AUTH_ROUTES}/getVerifiedUser`
export const GET_ALL_PENDING_ROUTE = `${AUTH_ROUTES}/getPendingUser`
export const GET_ALL_UNVERIFIED_ROUTE = `${AUTH_ROUTES}/getUnVerifiedUser`
export const GET_STUDENT_INFO_BY_ID_ROUTE = `${AUTH_ROUTES}/student`
export const CHANGE_APPLICATION_STATUS_TO_VERIFIED_ROUTE = `${AUTH_ROUTES}/verifyStudent`
export const CHANGE_APPLICATION_STATUS_TO_UNVERIFIED_ROUTE = `${AUTH_ROUTES}/unVerifyStudent`
export const CHANGE_APPLICATION_STATUS_TO_PENDING_ROUTE = `${AUTH_ROUTES}/pendingStudent`
