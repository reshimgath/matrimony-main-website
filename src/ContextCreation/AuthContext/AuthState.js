import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import jwt_decode from "jwt-decode";

let initialState = {}
if (localStorage.getItem('datatoken')) {
    initialState = jwt_decode(localStorage.getItem('datatoken'));
}


const reducer = (state, action) => {
    switch (action.type) {
        case "changeState": return jwt_decode(localStorage.getItem('datatoken'));
        case "emptyState": return {}
    }
}

const AuthState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <AuthContext.Provider value={{ dataState: state, dataDispatch: dispatch }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthState