
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/Provider";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const NavBar = ({Dark,Light,templete}) => {
  const { user,logOut } = useContext(authContext)
  const links = <>
      <div className="space-x-2 flex">


          <li >
              <NavLink
                  className={({ isActive }) => isActive ? 'text-blue-500  font-bold' : 'font-bold'} to='/'>Home
              </NavLink>
          </li>
          <li >
              <NavLink
                  className={({ isActive }) => isActive ? 'text-blue-500  btn btn-sm font-bold' : 'font-bold '} to='/NeedVolunteerPage'>Need Volunteer Page,
              </NavLink>
          </li>
          <li >
              <NavLink
                  className={({ isActive }) => isActive ? 'text-blue-500  btn btn-sm font-bold' : 'font-bold'} to='/my-profile/profile'>My Profile
              </NavLink>
          </li>
          <li >
              {
                  !user?.email && <NavLink
                      className={({ isActive }) => isActive ? 'text-blue-500  btn btn-sm font-bold' : 'font-bold'} to='/login'>Login
                  </NavLink>
              }
          </li>
      </div>

  </>


const toggleDark=()=>{

    Dark()
}
const toggleLight=()=>{

    Light()
}
const handelLogOut=()=>{
    logOut().then(()=>{
        toast.success('logout')
    }).catch(error=>console.log(error))
  }
    return (
      <div className="navbar container z-10">
            <div className="navbar-start z-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Volunteer Haven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                   user?.email &&<div className="avatar">
                   <div className="w-[50px] rounded-full">
                     <img src={user?.photoURL} alt={user?.displayName} title={user?.displayName} />
                   </div>
                 </div> 
                }
                {
                    user?.email && <button onClick={handelLogOut} className="btn btn-md btn-error text-white">LogOut</button>
                }

{
       !templete?<button onClick={toggleDark} className="btn btn-neutral"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
     </svg>
      Dark</button>:
        <button onClick={toggleLight} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
       Light</button>
    }

            </div>

        </div>
    );
};

export default NavBar;