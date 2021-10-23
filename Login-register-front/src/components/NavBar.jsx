import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav >
            <ul >
                <li >
                    <div>
                    <Link to="/" >
                        Home
                    </Link>
                    </div>
                    <div>
                    <Link to="/Login" >
                        Login
                    </Link>
                    </div>
                    <div>
                    <Link to="/Register" >
                        Register
                    </Link>
                    </div>
                    <div>
                    <Link to="/employee" >
                        Employee Login
                    </Link>
                    </div>


                </li>
            </ul>
            
        </nav>
    )
}
export default NavBar