import React from 'react';
import './_sidebar.scss';
import { MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { signOut } from '../../Redux/Reducers/authReducer';

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch=useDispatch();
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={()=>handleToggleSidebar(false)}
        >
            <li>
                <MdHome key={1} size={23} />
                <span key={2}>Home</span>
            </li>
            <li>
                <MdSubscriptions key={1} size={23} />
                <span key={2}>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp key={1} size={23} />
                <span key={2}>Liked Videos</span>
            </li>
            <li>
                <MdHistory key={1} size={23} />
                <span key={2}>History</span>
            </li>
            <li>
                <MdLibraryBooks key={1} size={23} />
                <span key={2}>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied key={1} size={23} />
                <span key={2}>Others</span>
            </li>
            <hr />
            <li onClick={()=>dispatch(signOut())}>
                <MdExitToApp key={1} size={23} />
                <span key={2}>Logout</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
