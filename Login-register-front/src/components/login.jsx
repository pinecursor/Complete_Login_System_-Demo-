
import React from 'react'
import './login.css'
import logo from './google.png'
import { Link } from 'react-router-dom'
// import logo2 from './bgimage.jpg'

export class login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


render() {
  return (
    <div>
    <form action="/login" method="POST" className="base-container" ref={this.props.containerRef}>
 
    <div className="content">
      <div className="image">
        <img src={logo} alt="Googleimg"/>
        <div className="header">Login</div>
      </div>
      <div className="form">
      <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder="email" id="email" />
          </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" id="password" />
        </div>
      </div>
    </div>
    <div className="footer">

    <button type ="reset" className="btn">Reset</button>
    &nbsp;
      <button type ="submit" className="btn" >
        Login
      </button>
    </div>
  </form>
<br></br>
<center>
<Link to="/register">Register</Link>
<br></br>
<Link to="/employee">Employee Login</Link>
</center>
</div>
  );
}
}

export default login;
