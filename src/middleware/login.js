
import * as API from "./api";


export const getLogin = (params) => API.post('/ms-admin-rest/api/v1.0/login', params);
export const setAuthToken = (token) => {
    API.setAuthToken(token);
};
export const getLoginRestore = (params) => API.put('/ms-admin-rest/api/v1.0/admin/change-password', params);
export const getLoginEmail = (params) => API.post('ms-admin-rest/api/v1.0/admin/request-change-password', params);