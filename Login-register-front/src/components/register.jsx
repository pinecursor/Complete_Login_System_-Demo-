
import React from 'react'
import logo from './google.png'
import { Link } from 'react-router-dom'

export class register extends React.Component {
  // constructor(props) {
  //   super(props);
  // }



 render() {
    return (
      <div>
      <form action="/register" method="POST" className="base-container" ref={this.props.containerRef}>
     
      <div className="content">
        <div className="image">
          <img src={logo} alt="Googleimg" />
          <div className="header">Register</div>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"  id="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder="email" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
          <div className="form-group">
          <label htmlFor="Company Name">Company Name</label>
		    	<input type="text" id = "Cname" name="Cname" placeholder="Company name" required/>
          </div>
        </div>
      </div>

      <div className="footer">
      <button type ="reset" className="btn">Reset</button>
    &nbsp;
        {/* <button type="button" className="btn">
          Register
        </button> */}
        <button type ="submit" className="btn">
        Register
          </button>
        
      </div>
    </form>
    <center>
    <Link to="/login">Login</Link>
<br></br>
<Link to="/employee">Employee Login</Link>
</center>
            </div>

    );
}
}

export default register