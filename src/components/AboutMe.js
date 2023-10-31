import React from 'react';
import '../styles/AboutMe.scss'
import Amir from "../images/amir.jpg"
const AboutMe = () => {
    return (
        <>
            <section id="about-me" className="bg-white">
                <h2 id="title" className=" m-4 pb-1 
            pl-3  ">About ME</h2>
                <div class="underline"></div>
                <div id='about-me-content' className="d-flex justify-content-between align-items-center  p-5 mt-4">
                    <div id="text" className="col-lg-6 w-lg-50 " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">


                        <h3 className="text-white ">Amir Famili</h3>
                        <h5 className="text-white">I'm a Front End (Web Designer). I build the front-end portion of websites and
                            web
                            applications the part users see and interact with. I creates websites and applications using web
                            languages such as HTML, CSS, Sass, Bootstrap, JavaScript and React.I allow user to access and interact
                            with
                            the site or app. I have 5 years experince in Front End. </h5>
                        <a href="http://https://github.com/amirmohammadfamili"><i className=""></i></a>
                    </div>
                    <img className="d-none d-lg-block " src={Amir} alt="Amir Famili" />
                </div>
            </section>
        </>
    );
}

export default AboutMe;