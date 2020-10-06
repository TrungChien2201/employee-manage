import getdataReducer from "../../component/admin/reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    getdataReducer: getdataReducer,
});
export default rootReducer;
