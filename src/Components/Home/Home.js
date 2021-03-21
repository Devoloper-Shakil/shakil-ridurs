import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
   const { name, image } = props.riders || {};
   return (
        
         <div className="riders-detels">
            <div className="riders">
            <Link to={"/name/"+name}>  <img src={image}  alt="" />
               <h2 > {name} </h2></Link>
            </div>
         </div>

  
     
   )
};

export default Home;