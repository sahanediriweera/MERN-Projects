import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div>
        <div className='header-container'>
            <IconButton className='icon-button'>
                <PersonIcon/>
            </IconButton>
            <img className='tinder-image' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG18.png' alt='TinderLogo'/>
            <IconButton className='icon-button'>
                <ForumIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header