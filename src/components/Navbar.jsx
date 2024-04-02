import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { EmailAuthContext } from "../context/AuthContext";


const Navbar = () => {

const {user, logOut} = useContext(EmailAuthContext)
const logOutHandle = ()=> {

  logOut()
}
    const nav = <>
        <li> <NavLink    to='/' >   Home </NavLink> </li> 
        <li> <NavLink    to='login' >   Log in </NavLink> </li> 
        <li> <NavLink    to='Signup' >  Sign Up </NavLink> </li> 

        {

          user && <>
              <li> <NavLink    to='/profile' >   Profile </NavLink> </li> 
        <li> <NavLink    to='about' >  About</NavLink> </li> 
          
          </>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{nav}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {nav}
    </ul>
  </div>
  <div className="navbar-end">
    {

      user && <p className="mr-4" >{user.displayName}</p>
    }
    {

      user ? <a  onClick={logOutHandle} className="btn btn-sm">  Log Out </a> : <Link  className="btn btn-sm" to='/login' > Log In </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;