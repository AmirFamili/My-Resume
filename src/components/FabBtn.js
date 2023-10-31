import React,{useState} from 'react';
import '../styles/FabBtn.scss'


const FabBtn = () => {
  const [style,setStyle]=useState(false);
    const active = () => {
      
        const btnGroup = document.querySelector('.btn-group-fab');
        if(!style){
             btnGroup. classList.add('active');
             setStyle(true);
        }else{
            btnGroup.classList.remove('active');
            setStyle(false);
        }
       
       }
       
    return (

        <div  className="btn-group-fab " onClick={active}>
            <a  className="btn btn-main bg-info text-white rounded-circle active" >
                <i  className="fa fa-bars"></i>
            </a>
            <a href="https://github.com/amirmohammadfamili"  className="btn btn-sub bg-dark text-white rounded-circle " target="_blank">
                <i  className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/amir-mohammad-famili/"  className="btn btn-sub bg-primary text-white rounded-circle " target="_blank">
                <i  className="fab fa-linkedin"></i>
            </a>
        </div>


    );
}

export default FabBtn;