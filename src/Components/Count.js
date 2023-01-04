import React from 'react'
import "../Components/Count.css"
const Count = () => {
    return (
        <>
            <div className="container count_container">
                <div className="row">
                    <h1 className="count_title">
                        Happy To Achieve
                    </h1>
                </div>

                <div className="row count_data_row">
                    <div className="col-lg-3 col-sm-6 col-xs-6 text-center mt-3">
                        <div className="achievement_count">
                            <h2>100</h2>
                        </div>

                        <div className="achievement_desc">
                            <h3>Profiles Created</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 text-center mt-3">
                        <div className="achievement_count">
                            <h2>100</h2>
                        </div>

                        <div className="achievement_desc">
                            <h3>Matching Profiles</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 text-center mt-3">
                        <div className="achievement_count">
                            <h2>100</h2>
                        </div>

                        <div className="achievement_desc">
                            <h3>Average profiles per month</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 text-center mt-3">
                        <div className="achievement_count">
                            <h2>100</h2>
                        </div>

                        <div className="achievement_desc">
                            <h3>All Profiles</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Count