import { combineReducers } from 'redux'
import types from '../actions/types'

const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    isUpdating:false,
    error: null,
    items: []
}

function users(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return { ...state, isFetching: true };
        case types.FETCH_USERS_SUCCESS:

            return { ...state, isFetching: false, items: action.payload,error: null };
        case types.FETCH_USERS_FAILURE:
            return { ...state, isFetching: false, error: action.error };

        case types.ADD_USER:
            return { ...state, isAdding: true };
        case types.ADD_USER_SUCCESS:
            return { ...state, isAdding: false,error: null };
        case types.ADD_USER_FAILURE:
            return { ...state, isAdding: false, error: action.error };

        case types.DELETE_USER:
            return { ...state, isDeleting: true };
        case types.DELETE_USER_SUCCESS:
            return { ...state, isDeleting: false,error: null };
        case types.DELETE_USER_FAILURE:
            return { ...state, isDeleting: false, error: action.error };

        case types.UPDATE_USERNAME:
            return { ...state, isUpdating: true };
        case types.UPDATE_USERNAME_SUCCESS:
            return { ...state, isUpdating: false ,error: null};
        case types.UPDATE_USERNAME_FAIL:
            return { ...state, isUpdating: false, error: action.error };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    users
})

export default rootReducer