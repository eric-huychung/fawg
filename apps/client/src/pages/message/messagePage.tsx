
import React from 'react';
import './messagePage.css';
import NavBar from '../../components/navbar/navbar';
import Chatbot from '../../components/chatbox/chatbot'
import Topbar from '../../components/topbar/topbar'


const MessagePage: React.FC = () => {
  return (
    <>
        <div className="background-secondary fullPage">
            <Topbar />
            <Chatbot />
            <NavBar />
        </div>
    </>
  );
};

export default MessagePage;
