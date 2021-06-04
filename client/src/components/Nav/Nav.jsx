import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-vendor">Add Vendor </NavLink>
        <NavLink className="link" to="/sign-out">Sign Out </NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up </NavLink>
        <NavLink className="link" to="/sign-in">Sign In </NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/vendors">Vendors </NavLink>
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
                    <div className="links">
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