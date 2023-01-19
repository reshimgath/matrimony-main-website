import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import jwt_decode from "jwt-decode";

const initialState = jwt_decode(localStorage.getItem('token'));

const reducer = (state, action) => {
    switch (action.type) {
        case "changeState": return {
            name: "Isha",
            city: "Kop"
        };
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