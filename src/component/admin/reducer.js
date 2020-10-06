const { ActionType } = require("../../redux/action/admin");

const list ={
    lists: []
}
const getdataReducer = (state = list,action) => {
    switch (action.type) {
        case ActionType.GET_DATA:{
            return {...state}
        }
        case ActionType.GET_DATA_SUCCESS:{
            return {...state, lists: action.payload.map((el, index) => ({...el, key: index}))}
        }  
        case ActionType.GET_DATA_SUCCESS:{
            return {...state}
        }     
        case ActionType.ADD_DATA:{
            return {...state}
        }
        case ActionType.ADD_DATA_SUCCESS:{
            return {...state}
        }
        case ActionType.ADD_DATA_ERROR:{
            return {...state}
        }
        case ActionType.DELETE_DATA:{
            return {...state}
        }
        case ActionType.DELETE_DATA_SUCCESS:{
            return {...state}
        }
        case ActionType.DELETE_DATA_ERROR:{
            return {...state}
        }
        default:
            return {...state}
    }
}
export default getdataReducer;