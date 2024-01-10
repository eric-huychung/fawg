import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './pages/splash/splashPage';
import MessagePage from './pages/message/messagePage';
import NotesPage from './pages/notes/notesPage';
import SettingPage from './pages/setting/settingPage';


const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
  
};

export default App;