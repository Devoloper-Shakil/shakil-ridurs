import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

import './Home.css';

const Home = (props) => {
  
   const { name, image } = props.riders;
   
   
   return (
      <div >
         <div className="riders-detels">
            <div className="riders">
               <img src={image}  alt="" />
               <h2 > <Link to={"/name/"+name}>{name}</Link> </h2>
            </div>
         </div>
      </div>
   );
};

export default Home;