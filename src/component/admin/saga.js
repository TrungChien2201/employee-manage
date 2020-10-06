import { put, takeLatest } from "redux-saga/effects";
import { ActionType, addDataSuccess, deleDataSuccess, getdata, getdatasuccess } from "../../redux/action/admin";
function* SagaGetdata(){
    try {
        const requestGet = yield fetch(`https://5f7c24f500bd74001690a4b7.mockapi.io/api/v1/users`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })

        })
        const responeGet = yield requestGet.json();
        yield put (getdatasuccess(responeGet));
    } catch (error) {
        
    }
}
 
function* SagaAddData(data){
    console.log('add data',data.payload);
    try {
        const requestAdd = yield fetch(`https://5f7c24f500bd74001690a4b7.mockapi.io/api/v1/users`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            }),
            body: JSON.stringify(data.payload)
        })
        const responeAdd = yield requestAdd.json();
        console.log(responeAdd);
        yield put(getdata())
        yield put (addDataSuccess(responeAdd));
    } catch (error) {
        
    }
}
function * SagaDeleteData(id){
    console.log(id.payload);
    try {
        const requestDelete = yield fetch(`https://5f7c24f500bd74001690a4b7.mockapi.io/api/v1/users/${id.payload}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
               

            })
        })
        const responeDelete = yield requestDelete.json();
        console.log(responeDelete);
        yield put(getdata())
        yield put (deleDataSuccess(responeDelete));
    } catch (error) {
        console.log(error);
    }
}
export default function* watchSagaGetdata(){
    yield takeLatest(ActionType.GET_DATA, SagaGetdata)
    yield takeLatest(ActionType.ADD_DATA, SagaAddData)
    yield takeLatest(ActionType.DELETE_DATA, SagaDeleteData)
}