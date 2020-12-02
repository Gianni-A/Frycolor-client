import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/components/logo.jpg';
import '../css/intro.css';

function Intro() {
  return(
    <section id="intro_container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 offset-md-4" id="menu_support">
            <div className="menu_container text-center border rounded">
              <div className="col-md-12">
                <img src={Logo} className="logo-img" alt="Logotipo"/>
              </div>
              <div className="col-md-12 mt-4 mb-5">
                <h5>Bienvenido a Frycolor, la red social de mi infancia</h5>
              </div>
              <div className="col-md-12 mb-3">
                <Link to='/login' className="btn btn-success btn-block">Log In</Link>
              </div>
              <div className="col-md-12">
                <Link to='/Signup' className="btn btn-info btn-block">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;