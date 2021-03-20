import React, { useState } from 'react';
import fakeData from '../../shakil69(1).json';


import Home from '../Home/Home';


const Riders = () => {
    const [rider,setRider]=useState(fakeData);

    return (
        <div>
         
            {
               rider.map(riders=><Home riders={riders}></Home>)
            }
           
        </div>
    );
};

export default Riders;