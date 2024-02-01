import React from 'react';
import './chatbar.css';
import { Link } from 'react-router-dom';


interface ChatBarProps {
    // Define the props for the ChatBar component here
}

const ChatBar: React.FC<ChatBarProps> = () => {
    // Implement the component logic here

    return (
        <div>
            <div className="chatbar d-flex align-items-center justify-content-around">
            <Link to="/message">
                <div className='chatBarHeight row d-flex align-items-center justify-content-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#F6F6F6" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>            
                </div>
            </Link>
            <Link to="">
                <div className='chatBarHeight row d-flex align-items-center justify-content-around'>
                    <span className='topbar-link col-12 text-center'>Logo</span>
                </div>
            </Link>
            <Link to="">
                <div className='chatBarHeight row d-flex align-items-center justify-content-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#F6F6F6" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>                
                </div>
            </Link>
        </div>
        </div>
    );
};

export default ChatBar;
