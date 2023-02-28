import React, { useContext } from 'react'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'
import Updatepersonal from "../Details/Updatecomps/updatepersonal"
import Updatefamily from "../Details/Updatecomps/updatefamily"
import Updatehoroscope from "../Details/Updatecomps/updatehoroscope"
import Updatepartner from "../Details/Updatecomps/updatepartner"
import UpdateRegister from "../Details/Updatecomps/updateregister"
import RedNav from "../../RedNav"
const Updateuser = () => {
    const mycontext = useContext(AuthContext)
    console.log(mycontext)
    return (
        <>
            < RedNav />
            <div className='container'>

                <div className="row mt-3 mb-3">
                    <h3 className='text-center'>Update User Details</h3>
                </div>
                <UpdateRegister email={mycontext.dataState.email} />
                <Updatepersonal email={mycontext.dataState.email} />
                <Updatefamily email={mycontext.dataState.email} />
                <Updatepartner email={mycontext.dataState.email} />
                <Updatehoroscope email={mycontext.dataState.email} />
            </div>
        </>

    )
}

export default Updateuser