import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducer";
import rootSaga from "../saga";

// import rootReducer from "../reducer/reducer";
// import rootSaga from "../sagas/saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
