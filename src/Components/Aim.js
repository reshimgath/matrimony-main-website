import React from 'react';
import "../Components/Aim.css";
import aimImage from '../images/reshimgath_about.jpg'
const Aim = () => {
    return (
        <>
            <div className="aim_div">
                <h1 className="aim_title">
                    Our Aim
                </h1>
            </div>

            <div className="aim_desc_div">
                <div className="aim_left_div">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequatur, minima at quibusdam dolor voluptatem eos molestiae, consequuntur tempore minus sed quo veritatis quod aspernatur delectus laborum? Porro, reprehenderit earum natus amet quisquam labore cupiditate, deleniti hic aut est nihil.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita modi maxime delectus dignissimos minus similique rerum tempora ea, cupiditate omnis.
                    </p>
                    <button className='aimBtn'>Read More</button>

                    <div className="extra"></div>
                </div>

                <div className="aim_right_div">
                    <img src={aimImage} alt="" />
                </div>
            </div>

        </>
    )
}

export default Aim