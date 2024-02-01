
import React from 'react';
import './messagePage.css';
import NavBar from '../../components/navbar/navbar';
import Chatbox from '../../components/chatbox/chatbox'
import Topbar from '../../components/topbar/topbar'


const MessagePage: React.FC = () => {
  return (
    <>
        <div className="background-secondary fullPage">
            <Topbar />
            <Chatbox />
            <NavBar />
        </div>
    </>
  );
};

export default MessagePage;
