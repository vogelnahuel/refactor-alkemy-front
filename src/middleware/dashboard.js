import * as API from "./api";
export const getDashboard = (params) => API.get('/api/operations/dashboard', params);
