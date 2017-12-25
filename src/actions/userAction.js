import types from './types'
import axios from '../util/axiosConfig'

function requestUsers() {
    return {
        type: types.FETCH_USERS
    }
}

function receiveUsers(users) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: users
    }
}

function failReceiveUsers() {
    return {
        type: types.FETCH_USERS_FAILURE,
        error: 'failed to get users'
    }
}

function requestAddUser(user) {
    return {
        type: types.ADD_USER,
        payload: user,
        isAdding:true
    }
}

function addUserSuccess() {
    return {
        type: types.ADD_USER_SUCCESS,

    }
}

function addUserFail() {
    return {
        type: types.ADD_USER_FAILURE,
        error: 'failed to add user'
    }
}

function requestDeleteUser(id){
    return {
        type: types.DELETE_USER,

    }
}

function deleteUserSuccess() {
    console.log('delete success')
    return {
        type: types.DELETE_USER_SUCCESS,

    }
}

function deleteUserFail() {
    return {
        type: types.DELETE_USER_FAILURE,
        error: 'failed to delete user'
    }
}

function requestUpdateUserName(id,name){
    return {
        type: types.UPDATE_USERNAME,
        payload: name
    }
}

function updateUserNameSucess(){
    return {
        type:types.UPDATE_USERNAME_SUCCESS
    }
}

function updateUserNameFail(){
    return {
        type:types.UPDATE_USERNAME_FAIL,
        error:'update user name fail'
    }
}

function updateUserName(id,name){
    return dispatch => {
        dispatch(requestUpdateUserName(name));
        return axios.patch('/users/'+id,{firstName:name})
            .then(response => dispatch(updateUserNameSucess()))
            .catch(error => dispatch(updateUserNameFail()))
    }
}

function fetchUsers() {

    return dispatch => {
        dispatch(requestUsers());
        return axios.get('/users')
            .then(response => dispatch(receiveUsers(response.data)))
            .catch(error => dispatch(failReceiveUsers()))
    }
}

function addUser(user) {
    return dispatch => {
        dispatch(requestAddUser(user));
        return axios.post('http://localhost:4000/users', user)
            .then(response => dispatch(addUserSuccess()))
            .catch(error => dispatch(addUserFail()))
    }
}

function deleteUser(id){
    return dispatch => {
        dispatch(requestDeleteUser(id));
        return axios.delete('/users/' + id)
            .then(response => dispatch(deleteUserSuccess()))
            .catch(error => dispatch(deleteUserFail()))
    } 
}
export default { fetchUsers,addUser,deleteUser,updateUserName }