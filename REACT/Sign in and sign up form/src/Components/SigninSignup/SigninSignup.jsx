
import React, {useState} from "react"; 
import './SigninSignup.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const SigninSignup = () => {

  const [action, setAction] = useState("Sign in");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Sign in"?<div></div>:
        <div className="input">
          <img src={user_icon} alt="Name field"/>
          <input type="text" placeholder='Name'/>
        </div>}
        <div className="input">
          <img src={email_icon} alt="Email field"/>
          <input type="email" placeholder='Email id'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="Password field"/>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign up"?<div></div>:
      <div className="forgot-password">Lost password ? <span>Click here !</span></div>}
      <div className="submit-container">
        <div className={action==="Sign in"?"submit gray":"submit"} onClick={() => {setAction("Sign up")}}>Sign up</div>
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={() => {setAction("Sign in")}}>Sign in</div>
      </div>
    </div>
  );
};

export default SigninSignup
