import { loginUser } from "../../service/service.user";
import { put } from 'redux-saga/effects';
import { loginSuccess,loginUnsucces } from "../actions/user.actions";

export function* login (auth)
{
    const response = yield loginUser(auth);
    console.log(response);
    if(response.status === 204) {  // ===204 if somethign server return null 
        yield put (loginUnsucces())
    } else {
        //add to localstorage userID(username)
        yield put (loginSuccess(response.data)) //print this this func expect user info
    }
}