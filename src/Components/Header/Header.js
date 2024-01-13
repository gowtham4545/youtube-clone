import React from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdApps, MdNotifications } from 'react-icons/md';

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className='header'>
            <FaBars className='headerMenu' onClick={() => handleToggleSidebar()} size={26} />
            <img
                className='headerLogo'
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
            />
            <form>
                <input type="text" placeholder='Search' />
                <button type='submit'><AiOutlineSearch size={22} /></button>
            </form>
            <div className="headerIcons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src='https://pngimg.com/uploads/hacker/hacker_PNG34.png' alt='avatar' />
            </div>
        </div>
    )
}

export default Header
