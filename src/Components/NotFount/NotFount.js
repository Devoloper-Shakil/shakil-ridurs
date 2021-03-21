import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faGoogle, faUsers } from '@fortawesome/free-solid-svg-icons'

const NotFount = () => {
    return (
        <div className="m-5  text-center">
             <h4 > <FontAwesomeIcon icon={faExclamation} /> </h4>
             <h1  className="text-danger " >Please select the vehicle and location of the journey.</h1>
          <p>Click the Home button to select</p>
          <Link to="/home"><button class="btn btn-warning">Home</button></Link>
        </div>
    );
};

export default NotFount;