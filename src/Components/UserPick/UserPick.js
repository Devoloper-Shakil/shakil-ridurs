import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../shakil69(1).json';
import UserInfo from '../UserInfo/UserInfo';

const UserPick = (props) => {
const {name}=useParams()

const product=fakeData.find(pd=>pd.name===name);
console.log(product);

  

    return (
        <div>
            
  
                <UserInfo product={product}></UserInfo>
          
    </div>
    );
};

export default UserPick;