
import React from 'react';
import './settingPage.css';
import NavBar from '../../components/navbar/navbar';

const SettingPage: React.FC = () => {
  return (
    <>
        <div className="background-secondary fullPage">
            <NavBar />
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-main">Setting</h1>
            </div>
        </div>
    </>
  );
};

export default SettingPage;
