import * as API from "./api";
export const getOperations = (params) => API.get('/api/operations/operations',params );
export const getOperationsByID = (id) => API.get(`/api/operations/${id}/operations`);
export const createOperation = (params) => API.post('/api/operations', params);
export const updateOperation = (id,params) => API.put(`/api/operations/${id}`, params);
export const deleteOperation = (id) => API.remove(`/api/operations/${id}`);