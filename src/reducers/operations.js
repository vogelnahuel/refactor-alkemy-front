export const types = {
  OPERATIONS_GET_REQUEST: `OPERATIONS_GET_REQUEST`,
  OPERATIONS_GET_SUCCESS: `OPERATIONS_GET_SUCCESS`,
  OPERATIONS_GET_ERROR: `OPERATIONS_GET_ERROR`,

  OPERATIONS_BY_ID_GET_REQUEST: `OPERATIONS_BY_ID_GET_REQUEST`,
  OPERATIONS_BY_ID_GET_SUCCESS: `OPERATIONS_BY_ID_GET_SUCCESS`,
  OPERATIONS_BY_ID_GET_ERROR: `OPERATIONS_BY_ID_GET_ERROR`,

  OPERATION_UPDATE_REQUEST: `OPERATION_UPDATE_REQUEST`,
  OPERATION_UPDATE_SUCCESS: `OPERATION_UPDATE_SUCCESS`,
  OPERATION_UPDATE_ERROR: `OPERATION_UPDATE_ERROR`,

  OPERATION_DELETE_REQUEST: `OPERATION_DELETE_REQUEST`,
  OPERATION_DELETE_SUCCESS: `OPERATION_DELETE_SUCCESS`,
  OPERATION_DELETE_ERROR: `OPERATION_DELETE_ERROR`,

  OPERATION_POST_REQUEST: `OPERATION_POST_REQUEST`,
  OPERATION_POST_SUCCESS: `OPERATION_POST_SUCCESS`,
  OPERATION_POST_ERROR: `OPERATION_POST_ERROR`,
};

export const INITIAL_STATE = {
  fetching: false,
  operations: [],
  filters: {
    limit: 4,
    offset: 0,
    description: undefined,
    category: undefined,
    incomyType: undefined,
  },
  operationSelected: {},
};

export const actions = {
  getOperationsRequest: (params) => ({
    type: types.OPERATIONS_GET_REQUEST,
    params,
  }),
  getOperationsSuccess: (operations) => ({
    type: types.OPERATIONS_GET_SUCCESS,
    operations,
  }),
  getOperationsError: () => ({
    type: types.OPERATIONS_GET_ERROR,
  }),
  /////////////////////

  getOperationsByIDRequest: (id) => ({
    type: types.OPERATIONS_BY_ID_GET_REQUEST,
    id,
  }),
  getOperationsByIDSuccess: (operation) => ({
    type: types.OPERATIONS_BY_ID_GET_SUCCESS,
    operation,
  }),
  getOperationsByIDError: () => ({
    type: types.OPERATIONS_BY_ID_GET_ERROR,
  }),

    /////////////////////

  getOperationsUpdateRequest: (id,params) => ({
    type: types.OPERATION_UPDATE_REQUEST,
    id,
    params,
  }),
  getOperationsUpdateSuccess: (operations) => ({
    type: types.OPERATION_UPDATE_SUCCESS,
    operations,
  }),
  getOperationsUpdateError: () => ({
    type: types.OPERATION_UPDATE_ERROR,
  }),

    /////////////////////

  getOperationsDeleteRequest: (id) => ({
    type: types.OPERATION_DELETE_REQUEST,
    id,
  }),
  getOperationsDeleteSuccess: (operations) => ({
    type: types.OPERATION_DELETE_SUCCESS,
    operations,
  }),
  getOperationsDeleteError: () => ({
    type: types.OPERATION_POST_ERROR,
  }),

    /////////////////////

  getOperationsCreateRequest: (params) => ({
    type: types.OPERATION_POST_REQUEST,
    params,
  }),
  getOperationsCreateSuccess: () => ({
    type: types.OPERATION_POST_SUCCESS,
  }),
  getOperationsCreateError: () => ({
    type: types.OPERATION_POST_ERROR,
  }),
};

export const selectors = {
  isFetching: ({ operations }) => operations.fetching,
  getOperations: ({ operations }) => operations.operations,
  getFilters: ({ operations }) => operations.filters,
  getOperation: ({ operations }) => operations.operationSelected,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OPERATIONS_GET_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.OPERATIONS_GET_SUCCESS:
      return {
        ...state,
        fetching: false,
        operations: action.operations,
      };
    case types.OPERATIONS_GET_ERROR:
      return {
        ...state,
        fetching: false,
      };

    ////////////////////////////////////
    case types.OPERATIONS_BY_ID_GET_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.OPERATIONS_BY_ID_GET_SUCCESS:
      return {
        ...state,
        fetching: false,
        operationSelected: action.operation,
      };
    case types.OPERATIONS_BY_ID_GET_ERROR:
      return {
        ...state,
        fetching: false,
      };
    ////////////////////////////////////
    case types.OPERATION_UPDATE_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.OPERATION_UPDATE_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.OPERATION_UPDATE_ERROR:
      return {
        ...state,
        fetching: false,
      };

    ////////////////////////////////////

    case types.OPERATION_DELETE_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.OPERATION_DELETE_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.OPERATION_DELETE_ERROR:
      return {
        ...state,
        fetching: false,
      };

    ////////////////////////////////////

    case types.OPERATION_POST_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case types.OPERATION_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.OPERATION_POST_ERROR:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
};
export default reducer;
