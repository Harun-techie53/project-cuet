import React, {Fragment, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginRegistration from './LoginRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuthToken } from '../utils';
import { signOutHandler } from '../actions/authAction';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    // const {
    //     handleOpenModal, 
    //     authToken, 
    //     handleLogOut
    // } = useContext(AuthContext);
    const dispatch = useDispatch();
    const authToken = getAuthToken(); 
    const authState = useSelector((state) => state.authReducer);
    const authUser = authState.authUserDetails ?? null;
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // className="dark:dark:bg-gray-800 dark:dark:text-gray-100"
  return (
    <nav className="bg-slate-500 top-0 sticky overflow-hidden shadow shadow-gray-100 w-100 px-8 py-1 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <Link to='/'>
                <div className="md:order-1">
                    <img 
                        src='../../images/CUET_Vector.png' 
                        className='w-16'
                    />
                </div>
            </Link>
            <div className="text-gray-700 order-3 w-full md:w-auto md:order-2">
                <ul className="flex font-semibold justify-between">
                    {
                        authToken && (
                            <li className="nav-el">
                                <Link to='/dashboard'>
                                    Dashboard
                                </Link>
                            </li>
                        )
                    }
                    <li 
                        className={`nav-el cursor-pointer`}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Study
                        <ExpandMoreIcon/>
                    </li>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        className='mt-3'
                    >
                        <Link to='/courses'>
                            <MenuItem onClick={handleClose}>
                                Courses
                            </MenuItem>
                        </Link>
                        <MenuItem>
                            Course Materials
                        </MenuItem>
                    </Menu>
                    <li className="nav-el">
                        <Link to='/researches'>
                            Research
                        </Link>
                    </li>
                    <li className="nav-el">
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className="nav-el">
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="order-2 md:order-3">
                {
                    authToken || authUser ? (
                        <button 
                            onClick={() => dispatch(signOutHandler())}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-gray-50 rounded-xl flex items-center gap-2"
                        >
                            <LogoutIcon/>
                            <span>Logout</span>
                        </button>
                    ) : (
                        <button 
                            onClick={() => setOpenModal(true)}
                            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </button>
                    )
                }
            </div>
        </div>
        <LoginRegistration
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </nav>
  )
}

export default Header