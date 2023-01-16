import React from 'react';
import '../Components/SearchResult.css';
import cardLadyImg from "../images/card_lady.png";
import viewMoreIcon from "../images/vm_btn.png"

const SearchResult = ({ arrProp }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 class="recent_title">Search Result</h1>
                    <p className='result_title'>{arrProp.length} Results Found</p>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 advance_search_div">
                        <h5 className='advance_search_option'>Can't find the match? <a href="#" id='advance_search_btn'>Go to Advance Search</a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult