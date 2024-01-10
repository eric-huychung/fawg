
import React from 'react';
import './messagePage.css';
import NavBar from '../../components/navbar/navbar';

const MessagePage: React.FC = () => {
  return (
    <>
        <div className="background-secondary">
            <NavBar />
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-main">Message</h1>
            </div>
        </div>
    </>
  );
};

export default MessagePage;
