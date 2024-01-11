import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';


const TopBar: React.FC = () => {
    return (
        <>
        <div className="topbar d-flex align-items-center justify-content-around">
            <Link to="">
                <div className='barHeight row d-flex align-items-center justify-content-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#F6F6F6" d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>                
                </div>
            </Link>
            <Link to="">
                <div className='barHeight row d-flex align-items-center justify-content-around'>
                    <span className='topbar-link col-12 text-center'>Logo</span>
                </div>
            </Link>
            <Link to="">
                <div className='barHeight row d-flex align-items-center justify-content-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='col-12'><path fill="#F6F6F6" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                </div>
            </Link>
        </div>
    </>
    );
};

export default TopBar;
