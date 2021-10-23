
import React from 'react'
import logo from './google.png'
import { Link } from 'react-router-dom'


export class employee extends React.Component {
  // constructor(props) {
  //   super(props);
  // }



 render() {
    return (
      <div>
      <form action="/employee" method="POST" className="base-container" ref={this.props.containerRef}>
     
      <div className="content">
        <div className="image">
          <img src={logo} alt="Googleimg" />
          <div className="header">Employee Login</div>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username" >Username</label>
            <input type="text" name="username" placeholder="username" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" placeholder="email@abc.com" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" id="password"/>
          </div>
          <div className="form-group">
          <label htmlFor="Company ID">Company ID</label>
		    	<input type="text" id = "CompanyID" name="CompanyID" placeholder="Company ID" required/>
          </div>
        </div>
      </div>
      <div className="footer">

      <button type ="reset" className="btn">Reset</button>
    &nbsp;

        <button type="submit" className="btn">
          Login
        </button>
      </div>

    </form>
            
<br></br>
<center>
<Link to="/login">Login</Link>
<br></br>
<Link to="/register">Register</Link>
</center>
            </div>
    );
}
}

export default employee;