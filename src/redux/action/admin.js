export const ActionType = {
    GET_DATA : 'GET_DATA',
    GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
    GET_DATA_ERROR: 'GET_DATA_ERROR',

    ADD_DATA: 'ADD_DATA',
    ADD_DATA_SUCCESS: 'ADD_DATA_SUCCESS',
    ADD_DATA_ERROR: 'ADD_DATA_ERROR',

    DELETE_DATA: 'DELETE_DATA',
    DELETE_DATA_SUCCESS: 'DELETE_DATA_SUCCESS',
    DELETE_DATA_ERROR: 'DELETE_DATA_ERROR'
}
export const getdata = (list) => {
    return {
        type: ActionType.GET_DATA,
        payload : list
    }
}
export const getdatasuccess = (list) => {
    return {
        type: ActionType.GET_DATA_SUCCESS,
        payload : list
    }
}
export const getdataerror = (list) => {
    return {
        type: ActionType.GET_DATA_ERROR,
        payload : list
    }
}

export const addData = (list) => {
    return {
        type: ActionType.ADD_DATA,
        payload : list
    }
}

export const addDataSuccess = (list) => {
    return {
        type: ActionType.ADD_DATA_SUCCESS,
        payload : list
    }
}

export const addDataError = (list) => {
    return {
        type: ActionType.ADD_DATA_ERROR,
        payload : list
    }
}

export const deleData = (list) => {
    return {
        type: ActionType.DELETE_DATA,
        payload : list
    }
}

export const deleDataSuccess = (list) => {
    return {
        type: ActionType.DELETE_DATA_SUCCESS,
        payload : list
    }
}

export const deleDataError = (list) => {
    return {
        type: ActionType.DELETE_DATA_ERROR,
        payload : list
    }
}