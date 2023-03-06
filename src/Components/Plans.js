import React, { useEffect, useState } from 'react'
import RedNav from '../RedNav'
import '../Components/Plans.css'
import axios from 'axios';
import timerIcon from '../images/timer.png';
import supportIcon from '../images/support.png';
import checkIcon from '../images/checked.png';
import coinIcon from '../images/star.png';
import { Link } from 'react-router-dom';


const Plans = () => {

    const [plan, setPlan] = useState([]);

    useEffect(() => {

        axios.get("https://reshimgathadminpanel.netlify.app/admincrud/getallplans")
            .then((res) => {
                setPlan(res.data);
            })
            .catch((err) => {

            })
    }, [])

    console.log(plan)
    return (
        <>
            <RedNav />
            {/* <div className="container-fluid mt-5">
                <div className="row">
                    <div className="bg-danger text-light">
                        <h1 className="text-center recharge_title">Recharge Plans</h1>
                    </div>
                </div>
            </div> */}

            <div className="container mt-3 mb-4">
                <div className="row justify-content-center">
                    {
                        plan.map((value, index) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mt-4 mb-4 includes_main_div">
                                        <h5 className='m-auto'>{value.price}</h5>
                                        <h6><img src={coinIcon} alt="img" />Can view {value.contact_count} Profiles.</h6>
                                        <h5><img src={timerIcon} alt="img" /> {value.expiresinMonths} Months</h5>
                                        <h5><img src={supportIcon} alt="img" /> Service Person {value.mediator ? ('Available') : ('Not Available')}</h5>
                                        <div className='main_plan'>
                                            <ul id="plan_includes">
                                                {value.services?.map((value, idx) => {
                                                    return (
                                                        <li className='services_li' key={idx}> <img src={checkIcon} alt="img" height='24px' width="24px" /> <p className='card-text list_p'>{value}</p></li>
                                                    )
                                                })}
                                            </ul>

                                        </div>

                                        <div className='recharge_div_btn'>
                                            <button className='rechargeBtn'><Link className='text-white plan_btn' to="/contact">Buy Plan</Link></button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Plans;