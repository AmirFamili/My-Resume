import React from 'react';
import '../styles/Projects.scss'
import Products from './Json/data.json'
const Projects = () => {
    return ( 
        
        <>
        <section id="projects">
            <h2 id="title"  className=" m-4 pb-1 
            pl-3 ">
                My Projects
            </h2>
            <div  className="underline"></div>
            <div  className="jumbotron p-5 mt-4 d-flex justify-content-around align-items-center flex-wrap ">
          {  Products.data.map(product=>
             <div data-aos="fade-up"
             data-aos-anchor-placement="top-bottom" id="project"  className="">
                            <img src={product.img} alt={product.name}/>
                            <h4  className=" p-3">{product.name}</h4>
                            <a href={product.link}  className="btn btn-secondary mt-2 p-3  w-100 "
                                target="_blank">Show Code
                            </a>
                        </div>
          ) }  
               
            </div>
        </section>

        </>
     );
}
 
export default Projects;