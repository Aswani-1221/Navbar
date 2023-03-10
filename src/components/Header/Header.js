import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'


function Header() {

    return (
        <div className='header_container'>
            <div className='header_left'>
                <Link to='/'>
                    <img className='header_image' src='logo.jpg' />
                </Link>

                <div className='search_box'>
                    <SearchIcon className='search_icon' />
                    <input type='text' placeholder="Search User" />
                </div>
            </div>
            <div className='header_right'>
               
                <Link style={{ textDecoration: 'none' }} to='/profile'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        Profile
                    </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/contacts'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        Contacts
                    </Button>
                </Link>

                <Link style={{ textDecoration: 'none' }} to='/about-us'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        ABOUT US
                    </Button>
                </Link>

                {/* <Link style={{ textDecoration: 'none' }} to='/profile'>
                    <Button style={{ border: 'none' }} variant='outlined'>
                        PROFILE
                    </Button>
                </Link> */}
                <Button style={{ border: 'none' }} variant='outlined'>
                    Help
                </Button>
                
            </div>

        </div>
    )
}

export default Header;