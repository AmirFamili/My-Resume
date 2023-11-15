import React from 'react';
import '../styles/Home.scss';
// import{useScroll,useTransform} from 'framer-motion'

const Home = () => {
    // const {scrollYProgress}=useScroll();
    // const {x}=useTransform(scrollYProgress,[0,1],[0,-600])
    return (

        <div  className="dark">
            <section id="home"  className="landing">
                <div  className="home-wrap">
                    <div  className="home-inner">

                    </div>
                </div>
            </section>
            <section data-aos="zoom-in-right"   className="caption text-center text-white  ">
                <h1 /*style={{x}} */ className="text-capitalize pb-2">I'm a front end developer  </h1>
                <h5  className="pb-3">I designed many web you can see my some projects with click on button.</h5>
                <a href="#projects"  className="btn btn-outline-light btn-start ">My Projects</a>
            </section >

        </div >


    );
}

export default Home;