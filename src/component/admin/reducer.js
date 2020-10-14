const { ActionType } = require("../../redux/action/admin");

const list ={
    lists: [],
    dataSearch: []
}
const getdataReducer = (state = list,action) => {
    switch (action.type) {
        case ActionType.GET_DATA:{
            return {...state}
        }
        case ActionType.GET_DATA_SUCCESS:{
            return {...state, lists: action.payload,dataSearch: action.payload}
        }  
        case ActionType.GET_DATA_ERROR:{
            return {...state}
        }     
        case ActionType.ADD_DATA:{
            return {...state}
        }
        case ActionType.ADD_DATA_SUCCESS:{
            const newList = [...state.lists];
           
            newList.push(action.payload)
            
            return {...state, lists: newList,dataSearch: newList}
        }
        case ActionType.ADD_DATA_ERROR:{
            return {...state}
        }
        case ActionType.DELETE_DATA:{
            return {...state}
        }
        case ActionType.DELETE_DATA_SUCCESS:{
            return {...state,lists: state.lists.filter(item=>item.id !== action.payload.id),dataSearch: state.lists.filter(item=>item.id !== action.payload.id)}
        }
        case ActionType.DELETE_DATA_ERROR:{
            return {...state}
        }
        case ActionType.EDIT_DATA:{
            return {...state}
        }
        case ActionType.EDIT_DATA_SUCCESS:{
            return {...state,lists: state.lists.map((item,index)=>{
                if(item.id === action.payload.id){
                    return {...action.payload,key: index}
                }
                return item;
            }),dataSearch: state.lists.map((item,index)=>{
                if(item.id === action.payload.id){
                    return {...action.payload,key: index}
                }
                return item;
            })}
        }
        case ActionType.EDIT_DATA_ERROR:{
            return {...state}
        }
        case ActionType.SEARCH_DATA:{
          
            return {...state}
        }
        default:
            return {...state}
    }
}
export default getdataReducer;