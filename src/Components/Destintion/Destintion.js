// import React, { useContext, useState } from 'react';
// import './Destintioon.css';
// import map from '../../images/Map.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { userContext } from '../../App';
// import UserInfo from '../UserInfo/UserInfo';
// import { Link, useHistory } from 'react-router-dom';
// import UserPick from '../UserPick/UserPick';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';


// const Destintion = (props) => {


//    const [loction,setLocation]=useState({
//     loction:false,
//     from:'',
//     to:''
//    })
     
// const searchLocatio=(e)=>{
//    let loction=true;
//     if (e.target.name === "from") {
//      loction= (e.target.value);
//       console.log(loction);
//       }
//       if (e.target.name === "to") {
//         loction= (e.target.value);
//         console.log(loction);
//         }
//         if (loction) {
//             const newLocation = { ...loction };
//             newLocation[e.target.name] = e.target.value;
//             setLocation(newLocation);
      
//           }
   
// }
// let history=useHistory()
// const hendelSearch=()=>{
//    if ( loction=false) {
//     searchLocatio(newLocation)
//    }else {nothink}
// }
    return (
      <div>
       <div>
     
        {/* <div className="container">
           
            <div>
          
            <form action="" className="bg-light w-25 mt-5 ms-5 float-start search">
                <label htmlFor="">pick From</label>
                <br />
                <input className="w-100" type="search" onBlur={searchLocatio} name="from" id="" />
                <br />
                <label htmlFor="">pick To</label>
                <br />
                <input className="w-100 " type="search" onBlur={searchLocatio} name="to" id="" />
                <br />
              <Link to=""> <input className="w-100 mt-4  bg-danger" type="submit" value="Search" /></Link>
                
            </form>
            </div>  */}
            <div>
                {/* <img className="w-50 m-5 mt-5" src={map} alt=""/> */}
                {/* <Map google={props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                       
                    </InfoWindow>
                </Map> */}
            </div>
            {/* </div> */}


            {/* <div className="product-detel">

                   
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
                    </div> */}
                </div>
        </div>
    );
};


export default Destintion;
