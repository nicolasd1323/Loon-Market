import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <NavLink className="nav-link" to="/add-vendor">Add Vendor </NavLink>
        <NavLink className="nav-link" to="/sign-out">Sign Out </NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="nav-link" to="/sign-up">Sign Up </NavLink>
        <NavLink className="nav-link" to="/sign-in">Sign In </NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="nav-link" to="/vendors">Vendors </NavLink>
    </>
)
const Nav = ({ user }) => {
        return (
          <nav>
            <div className="nav-container">
              <div className="left-container">
               
                <NavLink className="logo-link" to="/">Loon Market</NavLink>
              </div>
              <div className="right-container">
                    <div className="nav-links">
                        {user && <div className="link-welcome"><span className="nav-welcome">Welcome, {user.username}</span></div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
              </div>
            </div> 
          </nav>
        )
}
export default Nav