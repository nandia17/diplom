import React from 'react'
import Navbar from '../components/header/Navbar';
import loginImg from "./login.png";
export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return <div className='base-container' ref={this.containerRef}>
            <Navbar/>
            <div className='header'>Login</div>
            <div className='content'>
                <div className="image">
                <img src={loginImg} alt="login" />
              
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' placeholder='username'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='password'/>
                    </div>
                </div>
            </div>
            <div className="footer-login">
                <button type='button' className="btn-login">Login</button>
            </div>
        </div>
        

    } 
}