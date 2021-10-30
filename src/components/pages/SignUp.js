import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Signup.css';

export default function SignUp() {

  return (
    <div className="signup-container">
      <div className="registration-form">
        <header>
          <h1>Sign Up</h1>
          <p>Fill in all informations</p>
        </header>
        <form className="form-container">
          <div className="input-section email-section">
            <i className="fa fa-envelope"></i>
            <input
              className="email"
              type="email"
              placeholder="ENTER YOUR E-MAIL HERE"
              autocomplete="off"
            />
          </div>
          <div className={"input-section password-section "}>
            <i className="fa fa-lock"></i>
            <input
              className="password"
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
            />
          </div>
          <div className={"input-section repeat-password-section "}>
            <i className="fa fa-lock"></i>
            <input
              className="repeat-password"
              type="password"
              placeholder="REPEAT YOUR PASSWORD HERE"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
      <Footer />
    </div>)
}