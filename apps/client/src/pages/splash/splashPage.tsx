
import React from 'react';
import './splashPage.css';

const SplashPage: React.FC = () => {
  return (
    <>
        <div className="background-main">
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-main">FAWG</h1>
            </div>
            <button>Next</button>
        </div>
    </>
  );
};

export default SplashPage;
