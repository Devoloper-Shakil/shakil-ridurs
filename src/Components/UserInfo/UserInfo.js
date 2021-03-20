import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faUsers } from '@fortawesome/free-solid-svg-icons'
import map from '../../images/Map.png';
import './UserInfo.css'

const UserInfo = (props) => {
    const { price, image, name } = props.product || {};
    const [newLocations, setNewLocations] = useState(false);
    const [loction,setLocation]=useState({
        from:'',
        to:''
       })

    const searchLocatio=(e)=>{
      
            if (loction) {
                const newLocation = { ...loction };
                 newLocation[e.target.name] = e.target.value;
                setLocation(newLocation);

              }

    }


    return (
        <div className="product container ">
            {newLocations? <div  >
                <div className="product-info">
                <div className="ms-5 mt-5 bg-primary p-2  search-lacation">
                <h4 className="ms-5"> from:{loction.from}</h4>
                  <h4 className="timeline"></h4>
                   <h4 className="ms-5"> to:{loction.to}</h4>
  
                </div>
                    <div className="product-detel">
                        <img src={image} alt="" />
                        <h4>{name}</h4>
                        <h4> <FontAwesomeIcon icon={faUsers} /> 4</h4>
                        <h4>{price}</h4>
                    </div>
                    <div className="product-detel">
                        <img src={image} alt="" />
                        <h4>{name}</h4>
                        <h4> <FontAwesomeIcon icon={faUsers} /> 4</h4>
                        <h4>{price}</h4>
                    </div>
                    <div className="product-detel">
                        <img src={image} alt="" />
                        <h4>{name}</h4>
                        <h4> <FontAwesomeIcon icon={faUsers} /> 4</h4>
                        <h4>{price}</h4>
                    </div>
                </div>
            </div>
            :<div className="search bg-light w-25 mt-5 ms-5 float-start">
            <form action="">
                <label htmlFor="">pick From</label>
                <br />
                <input className="w-100" onBlur={searchLocatio} type="search" name="from" id="" />
                <br />
                <label htmlFor="">pick To</label>
                <br />
                <input className="w-100 "  onBlur={searchLocatio} type="search" name="to" id="" />
                <br />
               <input onClick={() => setNewLocations(true)} className="w-100 mt-4  bg-danger" type="submit" value="Search" />
            </form>
        </div> 
            }
            <img className="w-50 m-5 mt-5 map" src={map} alt="" />
         
        </div>
    );
};

export default UserInfo;