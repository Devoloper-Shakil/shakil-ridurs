import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/shakil.PNG';
import './Heder.css';


const Heder = () => {
    const [loginUser,setLoginUser]=useContext(userContext);
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sub-menu" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destintion">Destintion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact" >Contact</Link>
                        </li>
                        <li>
                            <img  className="rounded-circle w-25 ms-3" src={loginUser.photoURL} alt=""/>
                        </li>
                        <li>
                            <p  className="user-name">{loginUser.name}</p>
                        </li>
                        <li className="nav-item">
                        <Link to="/login"><button type="button" className="btn btn-primary ms-3">Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Heder;