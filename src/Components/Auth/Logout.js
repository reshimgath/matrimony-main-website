import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'


const Logout = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    useEffect(() => {
        localStorage.clear();
        authContext.dataDispatch({ type: "emptyState" });
        navigate('/')
    }, [])
    return (
        <></>
    )
}

export default Logout