import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()

    const logOut = () => {
        signOut(auth);
        navigate('/')
        localStorage.removeItem('accessToken')
    }

    const { pathname } = useLocation();

    const navItem = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li><Link to='blog'>Blog</Link></li>
        <li>{user ? <button className='btn btn-ghost' onClick={logOut}>Sign Out</button> : <Link to="/login">LogIn</Link>}</li>
    </>

    return (
        <div className="navbar bg-base-300">
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                {pathname.includes("dashboard") && (<label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>)}

            </div>
            <NavLink to="/" className="btn btn-ghost mx-auto normal-case text-xl">Anik Parts World</NavLink>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-30">
                        {navItem}
                    </ul>
                </div>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal p-2 items-center ">
                    {navItem}
                </ul>
            </div>
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar mx-auto">
                <div className="w-10  rounded-full">
                    <img src={user?.photoURL} alt="" />
                </div>
            </label>
        </div>
    );
};

export default Navbar;