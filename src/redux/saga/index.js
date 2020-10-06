import { all } from 'redux-saga/effects';
import watchSagaGetdata from '../../component/admin/saga';

function* rootSaga() {
    yield all([
        watchSagaGetdata(),
    ]
    )
};
export default rootSaga;
