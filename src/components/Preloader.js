import React, { useState } from 'react';
import '../styles/PreLoader.scss'

const PreLoader = () => {
  const [show, setShow] = useState(true);
  const loader = () => {
    setTimeout(()=>{
      setShow(false);
    },800)
    if (!show) {
      const loader = document.getElementById('preloader');
        loader.style.display = 'none';
    }

  }

  return (
    <div onLoad={loader()} id="preloader"></div>
  );
}

export default PreLoader;