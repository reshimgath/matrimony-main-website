import React from 'react';
import '../Components/SearchResult.css';
// import cardLadyImg from "../images/card_lady.png";
import viewMoreIcon from "../images/vm_btn.png"
import { Link } from 'react-router-dom'
const SearchResult = ({ arrProp }) => {
    console.log(arrProp)
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 class="recent_title">Search Result</h1>
                    <p className='result_title'>{arrProp.length} Results Found</p>
                </div>

                <div className="row mt-4">
                    {
                        arrProp?.map((val, id) => {
                            return (
                                <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
                                    <div className="recent_inside_div">
                                        <img src={val.image1} alt="image" class="img-fluid" />
                                        <h4 class="recent_profile_name">{val.firstname}</h4>
                                        <br />
                                        <p>Age : {val.age}</p>
                                        <p>Education : {val.education}</p>
                                        <br />
                                    </div>

                                    <div className="click_btn_div">
                                        <Link to='/viewmore' state={{ id: val._id }}>
                                            <img src={viewMoreIcon} alt="img" />
                                        </Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 advance_search_div">
                        <h5 className='advance_search_option'>Can't find the match? <Link to='/advancesearch' id='advance_search_btn'>Go to Advance Search</Link></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult