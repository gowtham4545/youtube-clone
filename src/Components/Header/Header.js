import React from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdApps, MdNotifications } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Header = ({ handleToggleSidebar }) => {
    const { user } = useSelector(state => state.auth);
    const imgURL = user ? user.photoURL : 'https://pngimg.com/uploads/hacker/hacker_PNG34.png';
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
                <img src={imgURL} alt='avatar' />
            </div>
        </div>
    )
}

export default Header
