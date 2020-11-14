import {createStore} from 'redux';
import initialState from "./initialState";
import {checkAuth} from "../services/Login";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_TOKEN":
            localStorage.setItem("token", action.value)
            return {token: action.value};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);


store.subscribe(checkAuth)

export default store;
