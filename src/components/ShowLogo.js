import React from 'react';
import '../styles/Home.scss';
import Html from "../images/html-5.png";
import CSS from "../images/css-3.png";
import JS from "../images/js.png";
import react from "../images/React.png";

const ShowLogo = () => {
    return (

        <section id="logo"  className=" d-flex justify-content-center align-items-center">
            <div  className="m-3 w-50 d-flex justify-content-around align-items-center">
                <img data-aos="zoom-in" src={Html} alt="Html" />
                <img data-aos="zoom-in" src={CSS} alt="CSS" />
                <img data-aos="zoom-in" src={JS} alt="JavaScript" />
                <img data-aos="zoom-in" src={react} alt="React" />
            </div>
        </section>

    );
}

export default ShowLogo;