
import React from 'react';
import './notesPage.css';
import NavBar from '../../components/navbar/navbar';

const NotesPage: React.FC = () => {
  return (
    <>
        <div className="background-secondary fullPage">
            <NavBar />
            <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-main">Notes</h1>
            </div>
        </div>
    </>
  );
};

export default NotesPage;
